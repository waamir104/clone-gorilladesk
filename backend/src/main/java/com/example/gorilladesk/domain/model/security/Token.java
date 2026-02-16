package com.example.gorilladesk.domain.model.security;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Index;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "Token")
@Table(
    name = "tokens",
    uniqueConstraints = @UniqueConstraint(name = "uq_tokens_token", columnNames = "token"),
    indexes = @Index(name = "idx_tokens_token", columnList = "token")
)
@EqualsAndHashCode(callSuper = false)
public class Token extends Auditable {

    @Id
    @SequenceGenerator(name = "seq_tokens_id", sequenceName = "seq_tokens_id", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_tokens_id")
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "token", nullable = false)
    @NotEmpty(message = "Token cannot be empty")
    private String token;

    @Column(name = "is_revoked", nullable = false)
    @NotNull(message = "Token revoked status cannot be null")
    private boolean isRevoked;

    @NotNull(message = "User cannot be null")
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false, foreignKey = @ForeignKey(name = "fk_tokens_user_id_users_id"))
    private User user;
}
