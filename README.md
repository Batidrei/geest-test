# Geest - Gestor de Usuarios

Una aplicación web frontend desarrollada con React y TypeScript para la gestión eficiente de contactos y usuarios. Este proyecto permite visualizar, filtrar, agregar y eliminar perfiles utilizando un diseño limpio, responsivo y moderno.

## Características Principales

- **Visualización de Usuarios:** Lista detallada de contactos con información de correo, departamento y teléfono.
- **Búsqueda y Filtrado Dinámico:** Filtra usuarios en tiempo real por coincidencia de nombre y selección de departamento.
- **Creación de Perfiles (Modal):** Formulario emergente para registrar nuevos usuarios de forma intuitiva.
- **Validación Robusta:** Reglas estrictas y mensajes de retroalimentación visual en los formularios implementados con **Formik** y **Yup**.
- **Estado de Carga (Skeleton):** Retroalimentación visual mediante _skeleton screens_ mientras se simula la carga asíncrona de datos.
- **Gestión de Memoria Local:** Eliminación y creación de usuarios gestionados mediante el estado derivado de React.

## Tecnologías Utilizadas

- **Framework & Entorno:** React 18, Vite
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Gestión de Formularios:** Formik, Yup
- **Iconografía:** Font Awesome (SVG Core)
- **Arquitectura:** Estructura basada en Atomic Design para componentes reutilizables.

## Requisitos Previos

Asegúrate de tener instalado en tu entorno local:

- [Node.js](https://nodejs.org/) (versión 16.0 o superior)
- npm (incluido en Node.js)

## Pasos para Instalar y Correr el Proyecto

1. **Clonar el repositorio:**
   Descarga el código a tu máquina local ejecutando el siguiente comando en tu terminal (Git Bash, VS Code Terminal, etc.):

   ```bash
   git clone [https://github.com/Batidrei/geest-test.git](https://github.com/Batidrei/geest-test.git)

   ```

1. Navegar a la carpeta del proyecto:

```bash
cd geest-test
```

3. Instalar las dependencias:
Descarga e instala todos los paquetes necesarios (React, Tailwind, Formik, etc.) definidos en el archivo package.json:

```bash
npm install
```

4. Iniciar el servidor de desarrollo:
Levanta el entorno local de Vite con el siguiente comando:

```bash
npm run dev
```

5. Visualizar la aplicación:
Una vez que el servidor esté corriendo, la terminal te mostrará una ruta local (por lo general http://localhost:5173/). Haz clic en el enlace o cópialo y pégalo en tu navegador.

Estructura de Archivos Principal
```Plaintext
src/
├── components/         # Componentes visuales y lógicos
│   ├── atoms/          # Componentes de UI básicos (ej. SkeletonList)
│   ├── AddContact.tsx  # Formulario modal de creación
│   ├── ContactList.tsx # Renderizado de la lista de usuarios
│   └── SearchFilter.tsx# Barra de búsqueda y filtrado
├── data/               # Archivos JSON con datos iniciales
├── types/              # Definiciones e interfaces de TypeScript
├── App.tsx             # Contenedor principal y gestión del estado global
└── main.tsx            # Punto de montaje de React
```

Autor
Alex Andrei Bastida Flores 🦇

GitHub: @Batidrei