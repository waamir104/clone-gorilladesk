package com.example.gorilladesk.infrastructure.security.config;

import com.example.gorilladesk.domain.model.security.Token;
import com.example.gorilladesk.domain.port.token.ITokenRepository;
import com.example.gorilladesk.infrastructure.rest.spring.exception.AppBadRequestException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LogoutService implements LogoutHandler {

    private final ITokenRepository tokenRepository;

    @Override
    public void logout(
            HttpServletRequest request,
            HttpServletResponse response,
            Authentication authentication) {
        final String authHeader = request.getHeader("Authorization");
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            throw new AppBadRequestException("Invalid JWT.");
        }
        final String jwtToken = authHeader.substring(7);
        Token storedToken = tokenRepository.findByToken(jwtToken)
                .orElseThrow(() -> new AppBadRequestException("Invalid JWT."));
        storedToken.setRevoked(true);
        tokenRepository.save(storedToken);
    }
}
