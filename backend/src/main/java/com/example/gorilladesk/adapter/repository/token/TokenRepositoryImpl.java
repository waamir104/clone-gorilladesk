package com.example.gorilladesk.adapter.repository.token;

import com.example.gorilladesk.domain.model.security.Token;
import com.example.gorilladesk.domain.port.token.ITokenRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Implementación del puerto {@link ITokenRepository} utilizando {@link TokenJpaRepository}.
 */
@Repository
public class TokenRepositoryImpl implements ITokenRepository {

    private final TokenJpaRepository tokenJpaRepository;

    public TokenRepositoryImpl(TokenJpaRepository tokenJpaRepository) {
        this.tokenJpaRepository = tokenJpaRepository;
    }

    @Override
    public Optional<Token> findByToken(String token) {
        return tokenJpaRepository.findByToken(token);
    }

    @Override
    public Token save(Token token) {
        return tokenJpaRepository.save(token);
    }

    @Override
    public List<Token> saveAll(List<Token> tokens) {
        return tokenJpaRepository.saveAll(tokens);
    }

    @Override
    public List<Token> findAllValidTokensByUser(Long userId) {
        return tokenJpaRepository.findAllByUser_IdAndIsRevokedFalse(userId);
    }
}
