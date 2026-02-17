package com.example.gorilladesk.infrastructure.rest.spring.resource;

import com.example.gorilladesk.adapter.dto.resource.ApiResponse;
import com.example.gorilladesk.adapter.dto.resource.authentication.AuthenticationRequest;
import com.example.gorilladesk.adapter.dto.resource.authentication.AuthenticationResponse;
import com.example.gorilladesk.adapter.dto.resource.authentication.RegisterRequest;
import com.example.gorilladesk.application.service.authentication.IAuthenticationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthResource {

    private final IAuthenticationService authenticationService;

    @PostMapping("/register")
    @Transactional
    public ResponseEntity<ApiResponse<AuthenticationResponse>> register(
            @Valid @RequestBody RegisterRequest request) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(ApiResponse.<AuthenticationResponse>builder()
                        .statusCode(HttpStatus.CREATED.value())
                        .message("User registered successfully")
                        .data(authenticationService.register(request))
                        .build());
    }

    @PostMapping("/authenticate")
    @Transactional
    public ResponseEntity<ApiResponse<AuthenticationResponse>> authenticate(
            @Valid @RequestBody AuthenticationRequest request) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(ApiResponse.<AuthenticationResponse>builder()
                        .statusCode(HttpStatus.OK.value())
                        .message("User authenticated successfully")
                        .data(authenticationService.authenticate(request))
                        .build());
    }

    @GetMapping("/valid/{username}/{token}")
    public ResponseEntity<ApiResponse<Boolean>> validateToken(
            @PathVariable String username,
            @PathVariable String token) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(ApiResponse.<Boolean>builder()
                        .statusCode(HttpStatus.OK.value())
                        .message("Token status validated.")
                        .data(authenticationService.validateToken(username, token))
                        .build());
    }
}
