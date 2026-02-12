package com.example.gorilladesk.domain.model.app;

import com.example.gorilladesk.domain.model.security.Auditable;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "app_label")
@SequenceGenerator(
        name = "app_label_seq",
        sequenceName = "app_label_seq",
        allocationSize = 1
)
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Label extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "app_label_seq")
    private Long id;

    @Column(name = "label_key", nullable = false)
    private String key;

    @Column(name = "language", nullable = false, length = 5)
    private String language;

    @Column(name = "label_value", nullable = false)
    private String value;

    public Label(String key, String language, String value) {
        this.key = key;
        this.language = language;
        this.value = value;
    }
}

