// Requerir o importar express.-
const express = require("express");

const path = require("path");

// Instanciamos express en la variable app.-
const app = express();

// Configuramos el puerto de escucha del servidor.-
const port = 3030;

// Importo el Middleware para permitir en el nevagador las peticiones web desde diferentes origenes.-
const cors = require("cors");

// Importo las rutas desde el archivo usuariosRouter.js 
const usuariosRouter = require("./routes/usuariosRouter.js");

// Importo para conectar con la BD.-
const db = require("./data/db.js");

// Uso de cors.-
app.use(cors());

// Uso del Middleware para analizar la carga útil en formato json de req.body.- 
app.use(express.json());

// Muestro mensaje en ruta home /.-
// app.get("/", (req, res) => {
//     res.send("Estas en el home /, ir a /usuarios");
// });

// Configurar la ruta estática a la carpeta 'front'
app.use(express.static(path.join(__dirname, '..', 'front')));

// Ruta para servir el archivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'front', 'index.html'));
});

// Configuro las rutas que se van a utilizar y estan definidas en el archivo usuariosRouter.-
app.use("/usuarios", usuariosRouter);

// conexion a la base de datos
const conexiondb = async () => {
    try {
        await db.authenticate()
        console.log(`Conexion ok a la base de datos`);
    } catch (error) {
        console.log(`el error es : ${error}`);
    }
};

// Pongo a funcionar el servidor.-
app.listen(port, () => {
    conexiondb();
    console.log(`Server ok en el puerto http://localhost:${port}`);
});