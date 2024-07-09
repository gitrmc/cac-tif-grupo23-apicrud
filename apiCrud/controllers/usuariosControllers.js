// Requerir o importar la tabla o modelo desde el archivo usuariosModel.js.-
const usuariosModel = require("../models/usuariosModel.js");

// Mostrar usuarios GET.-
const traerUsuarios = async (req, res) => {
    try {
        const usuarios = await usuariosModel.findAll();
        res.json(usuarios);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Mostrar un usuario por id GET.-
const traerUnUsuario = async (req, res) => {
    try {
        const usuario = await usuariosModel.findByPk(req.params.id);
        res.json(usuario);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Crear usuario POST.-
const crearUsuario = async (req, res) => {
    try {
        await usuariosModel.create(req.body)
        res.json({ "message": "Registro creado correctamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Actualizar un usuario por id PUT.-
const actualizarUsuario = async (req, res) => {
    try {
        await usuariosModel.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({ "message": "Registro actualizado correctamente" });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Borrar un usuario por id DELETE.-
const borrarUsuario = async (req, res) => {
    try {
        await usuariosModel.destroy({
            where: { id: req.params.id }
        });
        res.json({ "message": `se borró el registro ${req.params.id}` });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Exporto en un objeto todas las funciones para que puedan ser utilizadas en otro archivo.- 
module.exports = { traerUsuarios, traerUnUsuario, crearUsuario, actualizarUsuario, borrarUsuario };