package com.example.gorilladesk.adapter.repository.user;

import com.example.gorilladesk.domain.model.security.User;
import com.example.gorilladesk.domain.port.user.IUserRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * Implementación del puerto {@link IUserRepository} utilizando {@link UserJpaRepository}.
 */
@Repository
public class UserRepositoryImpl implements IUserRepository {

    private final UserJpaRepository userJpaRepository;

    public UserRepositoryImpl(UserJpaRepository userJpaRepository) {
        this.userJpaRepository = userJpaRepository;
    }

    @Override
    public Optional<User> findByUsername(String username) {
        return userJpaRepository.findByUsername(username);
    }

    @Override
    public User save(User user) {
        return userJpaRepository.save(user);
    }

    @Override
    public boolean existsByUsername(String username) {
        return userJpaRepository.existsByUsername(username);
    }
}
