package com.example.gorilladesk.infrastructure.rest.spring.resource;

import com.example.gorilladesk.adapter.dto.resource.authentication.AuthenticationRequest;
import com.example.gorilladesk.adapter.dto.resource.authentication.AuthenticationResponse;
import com.example.gorilladesk.adapter.dto.resource.authentication.RegisterRequest;
import com.example.gorilladesk.application.service.authentication.IAuthenticationService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(AuthResource.class)
class AuthResourceTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private IAuthenticationService authenticationService;

    private static final String JWT_TOKEN = "eyJhbGciOiJIUzI1NiJ9.test";

    @Nested
    @DisplayName("POST /api/auth/register")
    class Register {

        @Test
        @DisplayName("devuelve 201 y token cuando el registro es correcto")
        void returnsCreatedAndTokenWhenValid() throws Exception {
            RegisterRequest request = RegisterRequest.builder()
                    .firstName("John")
                    .lastName("Doe")
                    .username("johndoe")
                    .password("password123")
                    .build();
            AuthenticationResponse response = AuthenticationResponse.builder().token(JWT_TOKEN).build();
            when(authenticationService.register(any(RegisterRequest.class))).thenReturn(response);

            mockMvc.perform(post("/api/auth/register")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(request)))
                    .andExpect(status().isCreated())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                    .andExpect(jsonPath("$.statusCode").value(201))
                    .andExpect(jsonPath("$.message").value("User registered successfully"))
                    .andExpect(jsonPath("$.data.token").value(JWT_TOKEN));

            verify(authenticationService).register(any(RegisterRequest.class));
        }

        @Test
        @DisplayName("devuelve 400 cuando el body es inválido (campos vacíos)")
        void returnsBadRequestWhenBodyInvalid() throws Exception {
            mockMvc.perform(post("/api/auth/register")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content("{\"firstName\":\"\",\"lastName\":\"\",\"username\":\"\",\"password\":\"\"}"))
                    .andExpect(status().isBadRequest());
        }
    }

    @Nested
    @DisplayName("POST /api/auth/authenticate")
    class Authenticate {

        @Test
        @DisplayName("devuelve 200 y token cuando las credenciales son correctas")
        void returnsOkAndTokenWhenValid() throws Exception {
            AuthenticationRequest request = AuthenticationRequest.builder()
                    .username("johndoe")
                    .password("password123")
                    .build();
            AuthenticationResponse response = AuthenticationResponse.builder().token(JWT_TOKEN).build();
            when(authenticationService.authenticate(any(AuthenticationRequest.class))).thenReturn(response);

            mockMvc.perform(post("/api/auth/authenticate")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(objectMapper.writeValueAsString(request)))
                    .andExpect(status().isOk())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                    .andExpect(jsonPath("$.statusCode").value(200))
                    .andExpect(jsonPath("$.message").value("User authenticated successfully"))
                    .andExpect(jsonPath("$.data.token").value(JWT_TOKEN));

            verify(authenticationService).authenticate(any(AuthenticationRequest.class));
        }

        @Test
        @DisplayName("devuelve 400 cuando el body es inválido")
        void returnsBadRequestWhenBodyInvalid() throws Exception {
            mockMvc.perform(post("/api/auth/authenticate")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content("{\"username\":\"\",\"password\":\"\"}"))
                    .andExpect(status().isBadRequest());
        }
    }

    @Nested
    @DisplayName("GET /api/auth/valid/{username}/{token}")
    class ValidateToken {

        @Test
        @DisplayName("devuelve 200 y true cuando el token es válido")
        void returnsOkAndTrueWhenTokenValid() throws Exception {
            when(authenticationService.validateToken("johndoe", JWT_TOKEN)).thenReturn(true);

            mockMvc.perform(get("/api/auth/valid/johndoe/{token}", JWT_TOKEN)
                            .accept(MediaType.APPLICATION_JSON))
                    .andExpect(status().isOk())
                    .andExpect(jsonPath("$.statusCode").value(200))
                    .andExpect(jsonPath("$.message").value("Token status validated."))
                    .andExpect(jsonPath("$.data").value(true));

            verify(authenticationService).validateToken("johndoe", JWT_TOKEN);
        }

        @Test
        @DisplayName("devuelve 200 y false cuando el token es inválido")
        void returnsOkAndFalseWhenTokenInvalid() throws Exception {
            when(authenticationService.validateToken("johndoe", "invalid-token")).thenReturn(false);

            mockMvc.perform(get("/api/auth/valid/johndoe/invalid-token")
                            .accept(MediaType.APPLICATION_JSON))
                    .andExpect(status().isOk())
                    .andExpect(jsonPath("$.data").value(false));

            verify(authenticationService).validateToken("johndoe", "invalid-token");
        }
    }
}
