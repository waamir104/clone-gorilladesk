package com.example.gorilladesk.adapter.repository.label;

import com.example.gorilladesk.domain.model.app.Label;
import com.example.gorilladesk.domain.port.ILabelRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Implementación del puerto {@link ILabelRepository} utilizando {@link LabelJpaRepository}.
 */
@Repository
public class LabelRepositoryImpl implements ILabelRepository {

    private final LabelJpaRepository labelJpaRepository;

    public LabelRepositoryImpl(LabelJpaRepository labelJpaRepository) {
        this.labelJpaRepository = labelJpaRepository;
    }

    @Override
    public List<Label> findByLanguage(String language) {
        return labelJpaRepository.findByLanguage(language);
    }
}

