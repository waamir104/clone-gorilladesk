package com.example.gorilladesk.application.service.authentication;

import com.example.gorilladesk.adapter.dto.resource.authentication.AuthenticationRequest;
import com.example.gorilladesk.adapter.dto.resource.authentication.AuthenticationResponse;
import com.example.gorilladesk.adapter.dto.resource.authentication.RegisterRequest;
import com.example.gorilladesk.adapter.service.jwt.JwtService;
import com.example.gorilladesk.domain.model.security.Token;
import com.example.gorilladesk.domain.model.security.User;
import com.example.gorilladesk.domain.port.token.ITokenRepository;
import com.example.gorilladesk.domain.port.user.IUserRepository;
import com.example.gorilladesk.infrastructure.rest.spring.exception.AppBadRequestException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class AuthenticationService implements IAuthenticationService {

    private final IUserRepository userRepository;
    private final ITokenRepository tokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationService(
            IUserRepository userRepository,
            ITokenRepository tokenRepository,
            PasswordEncoder passwordEncoder,
            JwtService jwtService,
            AuthenticationManager authenticationManager) {
        this.userRepository = userRepository;
        this.tokenRepository = tokenRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
    }

    @Override
    @Transactional
    public AuthenticationResponse register(RegisterRequest request) {
        if (userRepository.existsByUsername(request.getUsername())) {
            throw new AppBadRequestException("Username already registered.");
        }
        User user = User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .username(request.getUsername())
                .password(passwordEncoder.encode(request.getPassword()))
                .build();
        user = userRepository.save(user);
        String jwt = jwtService.generateToken(user);
        Token tokenEntity = Token.builder()
                .token(jwt)
                .isRevoked(false)
                .user(user)
                .build();
        tokenRepository.save(tokenEntity);
        return AuthenticationResponse.builder().token(jwt).build();
    }

    @Override
    @Transactional
    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        User user = userRepository.findByUsername(request.getUsername())
                .orElseThrow(() -> new AppBadRequestException("User not found."));
        String jwt = jwtService.generateToken(user);
        Token tokenEntity = Token.builder()
                .token(jwt)
                .isRevoked(false)
                .user(user)
                .build();
        tokenRepository.save(tokenEntity);
        return AuthenticationResponse.builder().token(jwt).build();
    }

    @Override
    public boolean validateToken(String username, String token) {
        Optional<Token> storedToken = tokenRepository.findByToken(token);
        if (storedToken.isEmpty()) {
            return false;
        }
        Token t = storedToken.get();
        if (!t.getUser().getUsername().equals(username) || t.isRevoked()) {
            return false;
        }
        return jwtService.isTokenValid(token, t.getUser());
    }
}
