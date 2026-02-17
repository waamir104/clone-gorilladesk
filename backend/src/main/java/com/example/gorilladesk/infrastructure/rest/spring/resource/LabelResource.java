package com.example.gorilladesk.infrastructure.rest.spring.resource;

import com.example.gorilladesk.adapter.dto.resource.ApiResponse;
import com.example.gorilladesk.application.service.label.ILabelService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/labels")
public class LabelResource {

    private final ILabelService labelService;

    public LabelResource(ILabelService labelService) {
        this.labelService = labelService;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<Map<String, String>>> getLabels(
            @RequestParam(name = "lang", defaultValue = "es") String lang
    ) {
        Map<String, String> labels = labelService.getLabelsByLanguage(lang);

        ApiResponse<Map<String, String>> apiResponse = ApiResponse.<Map<String, String>>builder()
                .statusCode(HttpStatus.OK.value())
                .message("Labels retrieved successfully")
                .data(labels)
                .build();

        return ResponseEntity.ok(apiResponse);
    }

    @GetMapping("/app")
    public ResponseEntity<ApiResponse<Map<String, String>>> getAppLabels(
            @RequestParam(name = "lang", defaultValue = "es") String lang
    ) {
        Map<String, String> labels = labelService.getLabelsByLanguage(lang);

        ApiResponse<Map<String, String>> apiResponse = ApiResponse.<Map<String, String>>builder()
                .statusCode(HttpStatus.OK.value())
                .message("Labels retrieved successfully")
                .data(labels)
                .build();

        return ResponseEntity.ok(apiResponse);
    }

}

