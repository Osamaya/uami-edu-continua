# uami-edu-continua
Proyecto para la optimización y resolución de problemas de educación continua, ire actualizando la estructura del proyecto pero esta parte (front-end) será en React

ESTRUCTURA DEL PROYECTO
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
    
EXPLICACIÓN DE LA ESTRUCTURA

assets/	Imágenes, logos, fuentes
components/layout/	Componentes del marco (sidebar, header)
components/ui/	Componentes reutilizables (botones, inputs)
pages/	Cada pantalla del sistema
hooks/	Custom hooks (ej. carga de Excel, fetch)
context/	Manejo global de estado
services/	Requests al backend (FastAPI)
utils/	Funciones helper
router/	Rutas de la app
theme/	Paleta de colores, estilos globales (si usaramos Material o Tailwind config)
