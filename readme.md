# API REST en TypeScript con Node y Express

Este proyecto es una API REST desarrollada en TypeScript utilizando Node.js, mysql2, sequelize y Express.
versiones:
- "express": "^4.18.2",
- "typescript": "^5.2.2"
- "node: "16.15.0"
- "mysql2": "^3.6.1"
-  "sequelize": "^6.33.0",


## Configuración inicial

Antes de ejecutar la API, asegúrate de haber realizado los siguientes pasos:

1.Instala las dependencias: `npm install`

## Scripts

A continuación, se describen los scripts disponibles en este proyecto:

### Inicialización del proyecto

- `tsc:init`: Inicializa la configuración del compilador TypeScript.

### Desarrollo

- `start:build`: Compila el código TypeScript en JavaScript.
- `start:dev`: Inicia el servidor en modo de desarrollo utilizando `ts-node` y reinicia automáticamente en caso de cambios en el código.
- `start:dist:dev`: Inicia el servidor en modo de desarrollo a partir de los archivos previamente compilados en la carpeta `dist`.
- `start:build:dev`: Compila el código TypeScript en JavaScript y luego inicia el servidor en modo de desarrollo utilizando los archivos compilados.

### Producción

- `start:Prod`: Compila el código TypeScript en JavaScript y luego inicia el servidor en modo de producción utilizando `pm2`. El servidor se inicia con el nombre "actualizarUsuarios" para su posterior gestión.

## Uso

A continuación, se describen cómo puedes utilizar esta API y sus rutas:

## Endpoints

A continuación, se describen los endpoints disponibles en esta API:

### Obtener afiliado por tipo de documento y número de documento

- **Ruta:** `/api/afiliado/:tipDoc/:doc`
- **Método:** GET
- **Descripción:** Este endpoint permite obtener un afiliado según el tipo de documento y el número de documento proporcionados.
- **Parámetros:**
  - `tipDoc` (string, requerido): Tipo de documento del afiliado.
  - `doc` (string, requerido): Número de documento del afiliado.


### Asignar códigos

- **Ruta:** `/api/afiliado/asignarcodigo`
- **Método:** POST
- **Descripción:** Este endpoint permite asignar un código a los usuarios o validar si ya tienen un código asignado.
- **Cuerpo de la solicitud:**
  - `eMail` (string): Correo electrónico del usuario.
  - `idPlan` (string): ID del plan.
  - `idSede` (string): ID de la sede.
  - `nDocumento` (string): Número de documento del usuario.
  - `tipoDocumento` (string): Tipo de documento del usuario.

### Obtener información del proyecto

- **Ruta:** `/api/projectInfo`
- **Método:** GET
- **Descripción:** Este endpoint permite obtener información del proyecto, incluyendo la versión y los datos de desarrollo.


## Configuración de Swagger

La documentación de la API se genera automáticamente a partir de los comentarios en el código utilizando Swagger. Puedes acceder a la documentación en http://localhost:3001/doc cuando la API esté en funcionamiento.

## Variables de Entorno

Este proyecto utiliza variables de entorno para configurar su funcionamiento. A continuación, se enumeran las variables de entorno necesarias y sus funciones:

- `PORT`: Define el puerto en el que se ejecutará la API.
- `DB_USER`: Especifica el usuario de la base de datos.
- `DB_PASSWORD`: Proporciona la contraseña de la base de datos.
- `DB_DATABASE`: Indica el nombre de la base de datos a la que se conectará la API.
- `DB_PORT`: Establece el puerto de la base de datos.
- `URL_DOMAIN_SMART_FIT`: URL del dominio de Smart Fit para ciertas operaciones.
- `REST_GRANT_TYPE_Cajamag`: Tipo de concesión para autenticación en Cajamag.
- `REST_USERNAME_Cajamag`: Nombre de usuario para la autenticación en Cajamag.
- `REST_PASSWORD_Cajamag`: Contraseña para la autenticación en Cajamag.
- `REST_ENDPOINT_TOKEN_Cajamag`: URL del endpoint para obtener un token en Cajamag.
- `REST_ENDPOINT_USER_Cajamag`: URL del endpoint para obtener información del usuario en Cajamag.
- `API_TOKEN`: Token de autenticación para la API.

## versión
1.0.0


## Contacto

Si tienes alguna pregunta o comentario, no dudes en ponerte en contacto con Duvan Cruz en [duvandres9820@gmail.com]
