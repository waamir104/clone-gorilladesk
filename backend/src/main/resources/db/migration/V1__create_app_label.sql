CREATE SEQUENCE IF NOT EXISTS app_label_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE TABLE IF NOT EXISTS app_label (
    id BIGINT PRIMARY KEY DEFAULT nextval('app_label_seq'),
    label_key VARCHAR(255) NOT NULL,
    language VARCHAR(5) NOT NULL,
    label_value TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_app_label_language
    ON app_label (language);

