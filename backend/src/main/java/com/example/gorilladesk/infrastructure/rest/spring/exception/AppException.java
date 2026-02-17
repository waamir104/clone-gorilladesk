package com.example.gorilladesk.infrastructure.rest.spring.exception;

/**
 * Excepción base de la aplicación. Las demás excepciones de negocio extienden esta.
 */
public class AppException extends RuntimeException {

    public AppException(String message) {
        super(message);
    }

    public AppException(String message, Throwable cause) {
        super(message, cause);
    }
}
