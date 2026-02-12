package com.example.gorilladesk.application.service.label;

import java.util.Map;

/**
 * Contrato de servicio de aplicación para etiquetas.
 */
public interface ILabelService {

    /**
     * Obtiene las etiquetas para un idioma dado como un mapa clave-valor.
     *
     * @param language código de idioma (por ejemplo, "es", "en").
     * @return mapa clave-valor de etiquetas.
     */
    Map<String, String> getLabelsByLanguage(String language);
}

