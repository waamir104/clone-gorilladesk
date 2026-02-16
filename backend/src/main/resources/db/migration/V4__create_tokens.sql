CREATE SEQUENCE IF NOT EXISTS seq_tokens_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE TABLE IF NOT EXISTS tokens (
    id BIGINT PRIMARY KEY DEFAULT nextval('seq_tokens_id'),
    token TEXT NOT NULL,
    is_revoked BOOLEAN NOT NULL DEFAULT false,
    user_id BIGINT NOT NULL,
    creation_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    creation_user VARCHAR(255) NOT NULL DEFAULT 'system',
    last_modified_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_modified_user VARCHAR(255) NOT NULL DEFAULT 'system',
    is_deleted BOOLEAN NOT NULL DEFAULT false,
    is_enabled BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT fk_tokens_user_id_users_id FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE UNIQUE INDEX IF NOT EXISTS uq_tokens_token ON tokens (token);
CREATE INDEX IF NOT EXISTS idx_tokens_token ON tokens (token);
CREATE INDEX IF NOT EXISTS idx_tokens_user_id ON tokens (user_id);
