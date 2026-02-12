## Proyecto Fullstack: React + Spring Boot + Postgres

Este repositorio contiene una arquitectura de ejemplo con:

- **frontend**: Aplicación SPA en React con routing, que consume una API de labels multi‑idioma.
- **backend**: API REST en Spring Boot conectada a **Postgres**, que expone las labels según el idioma del usuario.

Las labels (textos visibles en la UI) se almacenan en base de datos, permitiendo soportar múltiples idiomas de forma dinámica.

### Estructura

- `frontend/`: Proyecto React.
- `backend/`: Proyecto Spring Boot.

Cada carpeta incluye su propio `README.md` con instrucciones de instalación y ejecución.

### Requisitos generales

- Node.js LTS (para el frontend).
- Java 17+ y Maven (para el backend).
- PostgreSQL 14+ (local o en contenedor).

