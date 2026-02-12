package com.example.gorilladesk.domain.port;

import com.example.gorilladesk.domain.model.app.Label;

import java.util.List;

/**
 * Puerto de persistencia para {@link Label}.
 */
public interface ILabelRepository {

    List<Label> findByLanguage(String language);
}

