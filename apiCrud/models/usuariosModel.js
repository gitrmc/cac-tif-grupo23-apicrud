// Requerir o importar la instancia de sequelize creada en el archivo db.js.-
const db = require("../data/db.js");

// Requerir o importar el objeto DataTypes para definir los tipòs de datos de los campos de la tabla o modelo.-
const { DataTypes } = require("sequelize");

// Defino un modelo o tabla en la BD llamada usuarios con los siguientes campos.-
const usuariosModel = db.define("usuarios", {
    nombre: { type: DataTypes.STRING },
    apellido: { type: DataTypes.STRING },
    dni: { type: DataTypes.STRING },
    direccion: { type: DataTypes.STRING },
    correo: { type: DataTypes.STRING }
});

module.exports = usuariosModel;