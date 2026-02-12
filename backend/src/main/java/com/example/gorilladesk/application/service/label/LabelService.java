package com.example.gorilladesk.application.service.label;

import com.example.gorilladesk.domain.model.app.Label;
import com.example.gorilladesk.domain.port.ILabelRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Implementación del servicio de aplicación para etiquetas.
 */
public class LabelService implements ILabelService {

    private final ILabelRepository labelRepository;

    public LabelService(ILabelRepository labelRepository) {
        this.labelRepository = labelRepository;
    }

    @Override
    public Map<String, String> getLabelsByLanguage(String language) {
        List<Label> labels = labelRepository.findByLanguage(language);
        Map<String, String> result = new HashMap<>();
        for (Label label : labels) {
            result.put(label.getKey(), label.getValue());
        }
        return result;
    }
}

