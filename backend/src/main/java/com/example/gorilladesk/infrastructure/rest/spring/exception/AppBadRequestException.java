package com.example.gorilladesk.infrastructure.rest.spring.exception;

/**
 * Excepción para peticiones inválidas (HTTP 400).
 */
public class AppBadRequestException extends AppException {

    public AppBadRequestException(String message) {
        super(message);
    }

    public AppBadRequestException(String message, Throwable cause) {
        super(message, cause);
    }
}
