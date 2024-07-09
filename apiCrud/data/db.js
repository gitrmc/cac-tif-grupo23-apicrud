// Requerir o importar sequelize para manejar BD.- 
const { Sequelize } = require("sequelize");

// Configuración para interactuar con la BD.-
const db = new Sequelize("api-crud-usuarios", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: 3306
});

// Para crear la BD en lenguaje sql seria:
// CREATE SCHEMA `api-crud-usuarios` DEFAULT CHARACTER SET utf8 ;
// Esto lo hacemos en XAMPP de forma gráfica con la herramienta MySQL Workbench.- 

// Exporto para poder usar db en otro archivo.-
module.exports = db;
