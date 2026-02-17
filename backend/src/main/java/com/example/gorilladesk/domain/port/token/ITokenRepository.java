package com.example.gorilladesk.domain.port.token;

import com.example.gorilladesk.domain.model.security.Token;

import java.util.List;
import java.util.Optional;

/**
 * Puerto de persistencia para {@link Token}.
 */
public interface ITokenRepository {

    Optional<Token> findByToken(String token);

    Token save(Token token);

    List<Token> saveAll(List<Token> tokens);

    List<Token> findAllValidTokensByUser(Long userId);
}
