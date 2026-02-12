package com.example.gorilladesk.domain.model.security;

import jakarta.persistence.Column;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

/**
 * Clase base para entidades auditables.
 */
@Getter
@Setter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class Auditable {

    // This class can be extended by other entities to inherit auditing capabilities
    // such as createdBy, createdAt, lastModifiedBy, lastModifiedAt

    @CreatedDate
    @Column(name = "creation_date", nullable = false, updatable = false)
    private LocalDateTime creationDate;

    @CreatedBy
    @Column(name = "creation_user", nullable = false, updatable = false)
    private String creationUser;

    @LastModifiedDate
    @Column(name = "last_modified_date", nullable = false, updatable = true)
    private LocalDateTime lastModifiedDate;

    @LastModifiedBy
    @Column(name = "last_modified_user", nullable = false, updatable = true)
    private String lastModifiedUser;

    @Column(name = "is_deleted", nullable = false, updatable = true)
    private boolean isDeleted;

    @Column(name = "is_enabled", nullable = false, updatable = true)
    private boolean isEnabled;
}

