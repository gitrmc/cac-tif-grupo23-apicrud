// Requerir o importar express.-
const express = require("express");

// Requerir o importar Router de express para enrutar o crear rutas para modularizar el código.-
const router = express.Router();

// Requerir o importar las funciones definidas en el modulo usuariosControllers.js y asignarlas a sus correspondientes variables.-
const { traerUnUsuario, traerUsuarios, crearUsuario, actualizarUsuario, borrarUsuario } = require("../controllers/usuariosControllers.js");

// Defino las rutas utilizando las funciones importadas.-
router.get("/", traerUsuarios); // Ruta donde muestro todos los usuario (GET).- 
router.get("/:id", traerUnUsuario); // Ruta donde muestro un usuario por el id (GET).-
router.post("/", crearUsuario); // Ruta donde creo un ussuario (POST).-
router.put("/:id", actualizarUsuario); // Ruta donde actualizo un usuario por id (PUT).-
router.delete("/:id", borrarUsuario); // Ruta donde borro un usuario por id (DELETE).-

// Exporto router para poder utilizarlo en otro archivo.-
module.exports = router;
