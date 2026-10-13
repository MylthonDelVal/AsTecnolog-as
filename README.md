# AsTecnologías — Plataforma de Aprendizaje TIC

[![Vercel](https://img.shields.io/badge/Live-astecnologias.vercel.app-black?logo=vercel)](https://astecnologias.vercel.app)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2024-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

> Plataforma educativa moderna diseñada específicamente para especialistas en TIC. Ofrece una interfaz intuitiva para la gestión de cursos, visualización de métricas de aprendizaje y exploración avanzada de catálogos técnicos.

---

## Capturas de pantalla

| Dashboard | Catálogo de Cursos | Vista de Detalle / IA |
|-----------|--------------------|-----------------------|
| ![Dashboard](src/assets/screenshot-dashboard.png) | ![Catalogo](src/assets/screenshot-catalogo.png) | ![Asistente](src/assets/screenshot-asistente.png) |

---

## ¿Qué hace?

La plataforma centraliza la experiencia de aprendizaje técnico a través de varias secciones clave:

1. **Dashboard de Usuario** — visualización en tiempo real del progreso de estudio, horas invertidas, cursos activos y estadísticas de rendimiento.
2. **Catálogo Avanzado** — exploración de cursos técnicos con filtros dinámicos por categoría (Data Analytics, Ciberseguridad, Office 365, Infraestructura).
3. **Asistente IA Integrado** — interfaz inteligente simulada para brindar soporte y resolver dudas técnicas rápidas a los estudiantes durante su navegación.
4. **Diseño Responsive y Fluido** — adaptado de forma óptima para escritorios, tablets y dispositivos móviles con una interfaz de alta fidelidad.

---

## Stack tecnológico

| Tecnología | Rol |
|---|---|
| **React 18** | UI y manejo de estado de la aplicación |
| **Vite 5** | Build tool y servidor de desarrollo ultrarrápido |
| **Tailwind CSS v4** | Estilos utilitarios y diseño responsivo |
| **Google Material Symbols** | Iconografía limpia y estandarizada |
| **Vercel** | Hosting y despliegue continuo (CI/CD) desde GitHub |

---

## Arquitectura del proyecto

```
src/
├── components/          # Componentes reutilizables (Navbar, Cards, Modales)
├── views/               # Vistas principales (Dashboard, Catalogo, CursoDetalle)
├── data/                # Mock data de cursos, categorías y métricas de usuario
├── App.jsx              # Enrutador principal y estado global de la app
├── App.css              # Estilos personalizados y animaciones
├── index.css            # Configuración base de Tailwind v4 (@import "tailwindcss")
└── main.jsx             # Punto de entrada de la aplicación (StrictMode)
```

---

## Instalación y desarrollo local

```bash
# 1. Clonar el repositorio
git clone https://github.com/MylthonDelVal/AsTecnolog-as.git
cd AsTecnolog-as

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev
```

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor local en `localhost:5173` |
| `npm run build` | Genera el build optimizado de producción en `/dist` |
| `npm run preview` | Permite visualizar localmente el build de producción |

---

## Sobre el proyecto

AsTecnologías fue desarrollado como una solución web moderna enfocada en la experiencia de usuario (UX) y el diseño de interfaces (UI) para el sector educativo tecnológico. Su objetivo principal es demostrar un flujo completo de aprendizaje con componentes altamente reutilizables y un rendimiento optimizado.

---

## Autor

**Mylthon Del Val**  
Universidad Tecnológica de Durango · 2026

---

_¿Tienes preguntas sobre el proyecto? Abre un issue o contáctame directamente._
