# Slider App

## Descripción

Este proyecto es una aplicación web desarrollada con Angular 19 y componentes standalone, que permite a los usuarios:
• Registrarse e iniciar sesión (con Firebase Auth),
• Navegar por una lista de películas y actores populares (con datos de TheMovieDB),
• Visualizar detalles individuales,
• Disfrutar de una interfaz moderna y responsive con navegación protegida.

Incluye lógica de autenticación, protección de rutas, carga dinámica de datos, scroll infinito y notificaciones visuales con HotToast.

## Tecnologías Utilizadas

- **Angular 19**: Framework moderno para el desarrollo de aplicaciones web.
- **TypeScript**: Lenguaje de programación con tipado estático.
- **Firebase Authentication**: Para registro, login y logout de usuarios.
- **TMDB API**: Fuente de datos de películas y actores.
- **SCSS**: Preprocesador de CSS que permite el uso de variables, anidamiento y otras características avanzadas.
- **Reactive Forms**: Módulo de Angular para construir formularios reactivos con validaciones y control total del estado.
- **Angular Router**: Navegación dinámica con rutas protegidas.
- **Jasmine + Karma**: Sistema de pruebas unitarias.

## Instrucciones de Instalación y Ejecución

1. Clona el repositorio:

   - git clone https://github.com/Leoyalta/IT-Academy-S7

2. Entra en el directorio del proyecto:

3. Instala las dependencias:

   - cd IT-Academy-S7-StarWars

   - npm install

4. Inicia el servidor de desarrollo:
   - npm run start

## Características Principales

- ✅ Registro y autenticación con Firebase (email/contraseña + Google login).
- ✅ Protección de rutas para contenidos privados.
- ✅ Visualización de películas y actores desde TheMovieDB API.
- ✅ Detalles individuales de cada película o actor.
- ✅ Scroll infinito en la lista de películas.
- ✅ Form validation avanzada con mensajes de error amigables.
- ✅ Notificaciones tipo toast en eventos importantes.
- ✅ Navegación dinámica y estructura standalone.
- ✅ Diseño responsive y moderno con SCSS.

## Estructura del Proyecto

src/
├── app/
│ ├── components/
│ ├── services/
│ ├── models/
│ ├── guards/
│ ├── app.routes.ts
│ └── app.config.ts
├── assets/
│ └── environments/
│ ├── environment.ts
│ └── environment.example.ts

## Demo

Puedes ver el proyecto en acción aquí:

- https://it-academy-s7-star-wars.vercel.app
