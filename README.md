# Proyecto Final del Curso de React.js - Coderhouse

Bienvenido al proyecto final del curso de React.js en la plataforma Coderhouse utilizando React+Vite.

## Descripción del Proyecto

El objetivo de este proyecto es crear un E-commerce interactivo que permita a los usuarios explorar, buscar y comprar productos relacionados con el mundo de la música. La aplicación cuenta con funcionalidades como la visualización de productos, la gestión del carrito de compras, y el proceso de pago utilizando Firebase para almacenar la información relevante.

![ECOMMERCE gif](https://github.com/coquinico/react-js/assets/139014533/eab134c5-b096-4b51-aa6c-1f2d3d32223e)


## Requisitos

Antes de comenzar a trabajar con el proyecto, asegúrate de tener instalado Node.js y npm en tu máquina. También necesitarás una cuenta en Firebase para configurar la base de datos.

## Configuración del Proyecto

Sigue estos pasos para clonar y configurar el proyecto en tu entorno local:

1. **Clona el Repositorio:**
   ```bash
   git clone https://github.com/coquinico/react-js.git

2. **Instala las Dependencias:**
   ```bash
    cd react-js
    npm install

3. **Configura Firebase:**
- Crea un proyecto en Firebase si no tienes uno.
- Configura la base de datos y autenticación según las necesidades del proyecto.
- Copia la configuración de tu proyecto Firebase .
- Crea un archivo .env en la raíz del proyecto y agrega las variables de entorno necesarias:

  env
<br>
VITE_apiKey=AIzaSyD4oqUAiVn0qABuxy90UeFZxauZMlCOHO0
<br>
VITE_authDomain=ecommerce-coderh-6c65c.firebaseapp.com
<br>
VITE_projectId=ecommerce-coderh-6c65c
<br>
VITE_storageBucket=ecommerce-coderh-6c65c.appspot.com
<br>
VITE_messagingSenderId=692626648761
<br>
VITE_appId=1:692626648761:web:34a012838312b263043568

 # Inicia la Aplicación:
    `bash
    npm run dev

La aplicación estará disponible en http://localhost:3000.




Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh









