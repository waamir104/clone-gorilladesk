## Frontend - React SPA

Este proyecto es una **Single Page Application (SPA)** en **React** que:

- **Consume una API REST** del backend (Spring Boot).
- **Obtiene las labels** (textos) desde base de datos a través de la API.
- **Soporta múltiples idiomas**, seleccionados por el usuario.

### Tecnologías

- React con TypeScript.
- React Router para el enrutamiento.
- Vite como bundler de desarrollo.

### Scripts principales

Después de instalar dependencias con `npm install`:

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Construye la aplicación para producción.
- `npm run preview`: Previsualiza la build de producción.

### Configuración de idioma y labels

- El frontend llama a un endpoint como `GET http://localhost:8080/api/labels?lang=es`.
- El backend responde con un JSON de la forma:

```json
{
  "home.title": "Inicio",
  "home.welcome": "Bienvenido",
  "menu.about": "Acerca de"
}
```

- La aplicación expone un **contexto de labels** para poder usar un componente `<Label keyName="home.title" />` en cualquier parte de la UI.

### Pasos para ejecutar

1. Instalar dependencias:

```bash
cd frontend
npm install
```

2. Asegúrate de tener el backend corriendo en `http://localhost:8080`.

3. Ejecutar el servidor de desarrollo:

```bash
npm run dev
```

4. Abrir el navegador en la URL que indique Vite (normalmente `http://localhost:5173`).

