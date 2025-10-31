# uami-edu-continua
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
   
