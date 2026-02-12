## Backend - Spring Boot + Postgres

Este proyecto es una API REST en **Spring Boot** que:

- Se conecta a una base de datos **PostgreSQL**.
- Expone un endpoint para **obtener las labels** (textos) según el idioma.

### Tecnologías

- Spring Boot 3
- Spring Web
- Spring Data JPA
- PostgreSQL Driver

### Endpoint principal

- `GET /api/labels?lang=es`

Respuesta (ejemplo):

```json
{
  "home.title": "Inicio",
  "home.welcome": "Bienvenido",
  "about.title": "Acerca de",
  "about.description": "Descripción de la aplicación."
}
```

### Requisitos

- Java 17+
- Maven
- PostgreSQL

### Configuración de base de datos

En `src/main/resources/application.properties` debes adaptar:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/gorilladesk
spring.datasource.username=tu_usuario
spring.datasource.password=tu_password
```

El esquema y algunos datos de prueba se crean con `schema.sql` y `data.sql`.

### Ejecutar el backend

```bash
cd backend
mvn spring-boot:run
```

Por defecto, el servidor se levanta en `http://localhost:8080`.

