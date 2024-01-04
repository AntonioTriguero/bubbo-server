# Biblioteca libros - Bubbo prueba técnica - SERVER SIDE

## Instrucciones:

Proyecto en Firebase y configurar Firebase Firestore como base de datos. crear una API REST utilizando Node.js y Express. La API debe tener los siguientes endpoints:

- GET /books: Devuelve una lista de todos los libros almacenados en Firebase Firestore.
- GET /books/{id}: Devuelve los detalles de un libro específico según su ID.
- POST /books: Crea un nuevo libro con la información proporcionada en la solicitud.
- PUT /books/{id}: Actualiza la información de un libro existente según su ID.
- DELETE /books/{id}: Elimina un libro específico según su ID.

- Mostrar los datos en la aplicación React Native de la [Parte 2](https://github.com/vanesascode/bubbo-client). La API se puede encontrar en el siguiente link: https://server-biblioteca-bubbo-vanesascode.onrender.com/

## Descripción del proyecto:

Hay una colección llamada 'books' en la base de datos de Firebase Firestore. Los 5 endpoints solicitados están en el archivo principal 'server.js'. Estos interactuan con la base de datos a través de la librería firebase-admin, instanciada en el archivo config.js, dentro de la carpeta 'firebase'.

## Herramientas:

### Paquetes instalados:

- npm i express
- npm i firebase
- npm i firebase-admin

### Run Command:

- npm run dev
