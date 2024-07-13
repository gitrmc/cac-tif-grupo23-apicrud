# cac-grupo23-apicrud

# Proyecto API CRUD con Frontend

## Descripción

Este proyecto consta de un frontend programado con HTML, CSS, JavaScript y Bootstrap para el ingreso, edición y listado de datos en un formulario, unido a un API CRUD programado con Node.js, Express, Sequelize y MySQL2, guardando los datos en MySQL corriendo en XAMPP.

## Requisitos

Para hacer funcionar el API CRUD necesitamos tener instalado el programa XAMPP que nos permite ejecutar un servidor MySQL en el cual tendremos configurada nuestra base de datos `api-crud-usuarios` con la tabla `usuarios` y los campos `id`, `nombre`, `apellido`, `dni`, `direccion`, `correo`, `createdAt` y `updateAt`.

## Instrucciones

1. **Configuración de la base de datos:**
   - Instalar y ejecutar XAMPP.
   - Crear la base de datos `api-crud-usuarios`.
   CREATE DATABASE `api-crud-usuarios`;
   - Configurar la tabla `usuarios` con los campos: `id`, `nombre`, `apellido`, `dni`, `direccion`, `correo`, `createdAt`, `updateAt`.
   CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    apellido VARCHAR(100),
    dni VARCHAR(20),
    direccion VARCHAR(255),
    correo VARCHAR(100),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
   );

2. **Instalación del API CRUD:**
   - Navegar a la carpeta `apiCrud`.
   - Ejecutar un terminal en esta carpeta.
   - Correr el comando `npm i` para instalar los módulos necesarios.
   - Asegurarse de que XAMPP esté ejecutando MySQL con la base de datos configurada.
   - Ejecutar el comando `npm run dev` para correr el API.

3. **Ejecución del Frontend:**
   - Desde la carpeta `front`, abrir el archivo `index.html` con "Open with Live Server".
   - Desde cualquier integrante o desde el menú "API CRUD", empezar a cargar los datos.
   - También se puede probar directamente sin utilizar un front con Postman o Thunder Client.

## Uso

Una vez configurado y ejecutado todo, podrás ingresar, editar y listar los datos de usuarios desde el frontend, interactuando con el API CRUD.

