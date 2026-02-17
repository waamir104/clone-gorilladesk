package com.example.gorilladesk.domain.port.user;

import com.example.gorilladesk.domain.model.security.User;

import java.util.Optional;

/**
 * Puerto de persistencia para {@link User}.
 */
public interface IUserRepository {

    Optional<User> findByUsername(String username);

    User save(User user);

    boolean existsByUsername(String username);
}
