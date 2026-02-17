package com.example.gorilladesk.adapter.repository.user;

import com.example.gorilladesk.domain.model.security.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * Repositorio Spring Data JPA para {@link User}.
 */
public interface UserJpaRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);

    boolean existsByUsername(String username);
}
