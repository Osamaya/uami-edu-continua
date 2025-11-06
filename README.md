# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

Proyecto para la optimización y resolución de problemas de educación continua, ire actualizando la estructura del proyecto pero esta parte (front-end) será en React

ESTRUCTURA DEL PROYECTO

```
frontend/
├── public/
│   └── index.html
└── src/
    ├── assets/
    │   ├── icons/
    │   ├── images/
    │   └── css/ (global styles si no usaMOS Tailwind)
    │
    ├── components/
    │   ├── layout/
    │   │   ├── Header.jsx
    │   │   ├── Sidebar.jsx
    │   │   └── Footer.jsx
    │   └── ui/ (botones, inputs, modal reusable)
    │       ├── Button.jsx
    │       └── Modal.jsx
    │
    ├── pages/
    │   ├── Dashboard/
    │   │   ├── index.jsx
    │   │   └── Dashboard.css
    │   ├── UploadExcel/
    │   │   ├── index.jsx
    │   │   └── styles.css
    │   └── EmailSender/
    │       ├── index.jsx
    │       └── styles.css
    │
    ├── hooks/
    │   └── useUploadExcel.js
    │
    ├── context/
    │   └── AppContext.jsx
    │
    ├── services/
    │   └── api.js (axios/fetch config)
    │
    ├── utils/
    │   └── helpers.js
    │
    ├── router/
    │   └── index.jsx (React Router config)
    │
    ├── theme/
    │   ├── palette.js
    │   └── typography.js
    │
    ├── App.jsx
    ├── main.jsx / index.js (depende Vite/CRA)
    └── config.js
```

EXPLICACIÓN DE LA ESTRUCTURA
```
Carpeta / Archivo	Descripción
assets/	Imágenes, íconos, fuentes y estilos globales.
components/layout/	Componentes estructurales del layout (Header, Sidebar, Footer).
components/ui/	Componentes reutilizables (Botones, Inputs, Modales).
pages/	Cada pantalla o vista principal de la aplicación.
hooks/	Custom Hooks (por ejemplo, carga de Excel o manejo de peticiones).
context/	Manejo global de estado con React Context API.
services/	Configuración de peticiones al backend (FastAPI).
utils/	Funciones auxiliares o helpers.
router/	Definición de rutas con React Router.
theme/	Paleta de colores y tipografía global (Material UI o Tailwind).
```
Tecnologías

```
React.js
Vite / CRA
Axios / Fetch
Context API
Tailwind CSS / CSS Modules
FastAPI (Backend)

Próximas actualizaciones
Integración con backend (FastAPI)
Autenticación de usuarios
Dashboard de métricas
Sistema de carga de Excel optimizado
```

CREACIÓN DEL PROYECTO
```
1. Crear el proyecto
pnpm create vite@latest nombre-del-proyecto

2. Instalar dependencias
pnpm install

3. Ejecutar el servidor de desarrollo
pnpm run dev

➜  Local:   http://localhost:5173/
```
Continuación
