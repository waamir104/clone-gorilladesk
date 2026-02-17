package com.example.gorilladesk.infrastructure.rest.spring.resource;

import com.example.gorilladesk.application.service.label.ILabelService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Map;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(LabelResource.class)
class LabelResourceTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private ILabelService labelService;

    private static final Map<String, String> SAMPLE_LABELS = Map.of(
            "home.title", "Inicio",
            "home.welcome", "Bienvenido"
    );

    @Nested
    @DisplayName("GET /api/labels (público)")
    class GetLabels {

        @Test
        @DisplayName("devuelve 200 y labels cuando se envía lang")
        void returnsOkAndLabelsWhenLangProvided() throws Exception {
            when(labelService.getLabelsByLanguage("es")).thenReturn(SAMPLE_LABELS);

            mockMvc.perform(get("/api/labels")
                            .param("lang", "es")
                            .accept(MediaType.APPLICATION_JSON))
                    .andExpect(status().isOk())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                    .andExpect(jsonPath("$.statusCode").value(200))
                    .andExpect(jsonPath("$.message").value("Labels retrieved successfully"))
                    .andExpect(jsonPath("$.data").isMap())
                    .andExpect(jsonPath("$.data.home.title").value("Inicio"))
                    .andExpect(jsonPath("$.data.home.welcome").value("Bienvenido"));

            verify(labelService).getLabelsByLanguage("es");
        }

        @Test
        @DisplayName("devuelve 200 con lang por defecto cuando no se envía lang")
        void returnsOkWithDefaultLangWhenLangNotProvided() throws Exception {
            when(labelService.getLabelsByLanguage("es")).thenReturn(SAMPLE_LABELS);

            mockMvc.perform(get("/api/labels").accept(MediaType.APPLICATION_JSON))
                    .andExpect(status().isOk())
                    .andExpect(jsonPath("$.data").isMap());

            verify(labelService).getLabelsByLanguage("es");
        }

        @Test
        @DisplayName("devuelve 200 y mapa vacío cuando no hay labels para el idioma")
        void returnsOkAndEmptyMapWhenNoLabels() throws Exception {
            when(labelService.getLabelsByLanguage("en")).thenReturn(Map.of());

            mockMvc.perform(get("/api/labels").param("lang", "en").accept(MediaType.APPLICATION_JSON))
                    .andExpect(status().isOk())
                    .andExpect(jsonPath("$.data").isMap());

            verify(labelService).getLabelsByLanguage("en");
        }
    }

    @Nested
    @DisplayName("GET /api/labels/app (privado)")
    class GetAppLabels {

        @Test
        @WithMockUser
        @DisplayName("devuelve 200 y labels cuando hay usuario autenticado")
        void returnsOkAndLabelsWhenAuthenticated() throws Exception {
            when(labelService.getLabelsByLanguage("es")).thenReturn(SAMPLE_LABELS);

            mockMvc.perform(get("/api/labels/app")
                            .param("lang", "es")
                            .accept(MediaType.APPLICATION_JSON))
                    .andExpect(status().isOk())
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                    .andExpect(jsonPath("$.statusCode").value(200))
                    .andExpect(jsonPath("$.message").value("Labels retrieved successfully"))
                    .andExpect(jsonPath("$.data.home.title").value("Inicio"));

            verify(labelService).getLabelsByLanguage("es");
        }

        @Test
        @DisplayName("devuelve 401 cuando no hay usuario autenticado")
        void returnsUnauthorizedWhenNotAuthenticated() throws Exception {
            mockMvc.perform(get("/api/labels/app")
                            .param("lang", "es")
                            .accept(MediaType.APPLICATION_JSON))
                    .andExpect(status().isUnauthorized());
        }
    }
}
