package com.example.gorilladesk.adapter.repository.token;

import com.example.gorilladesk.domain.model.security.Token;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

/**
 * Repositorio Spring Data JPA para {@link Token}.
 */
public interface TokenJpaRepository extends JpaRepository<Token, Long> {

    Optional<Token> findByToken(String token);

    List<Token> findAllByUser_IdAndIsRevokedFalse(Long userId);
}
