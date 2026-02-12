package com.example.gorilladesk.adapter.repository.label;

import com.example.gorilladesk.domain.model.app.Label;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Repositorio Spring Data JPA para {@link Label}.
 */
public interface LabelJpaRepository extends JpaRepository<Label, Long> {

    List<Label> findByLanguage(String language);
}

