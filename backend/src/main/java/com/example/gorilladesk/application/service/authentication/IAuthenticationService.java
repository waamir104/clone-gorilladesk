package com.example.gorilladesk.application.service.authentication;

import com.example.gorilladesk.adapter.dto.resource.authentication.AuthenticationRequest;
import com.example.gorilladesk.adapter.dto.resource.authentication.AuthenticationResponse;
import com.example.gorilladesk.adapter.dto.resource.authentication.RegisterRequest;

public interface IAuthenticationService {

    AuthenticationResponse register(RegisterRequest request);

    AuthenticationResponse authenticate(AuthenticationRequest request);

    boolean validateToken(String username, String token);
}
