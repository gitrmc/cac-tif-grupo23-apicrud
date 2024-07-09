document.addEventListener("DOMContentLoaded", () => {
    const formEditarUsuario = document.querySelector("#form-editar-usuario");

    const urlParams = new URLSearchParams(window.location.search);
    const usuarioId = urlParams.get('id');

    const cargarDatosUsuario = async () => {
        try {
            const respuesta = await axios.get(`http://localhost:3030/usuarios/${usuarioId}`);
            const usuario = respuesta.data;

            document.querySelector("#usuario-id").value = usuario.id;
            document.querySelector("#editar-nombre").value = usuario.nombre;
            document.querySelector("#editar-apellido").value = usuario.apellido;
            document.querySelector("#editar-dni").value = usuario.dni;
            document.querySelector("#editar-direccion").value = usuario.direccion;
            document.querySelector("#editar-correo").value = usuario.correo;
        } catch (error) {
            console.error("Error al cargar datos del usuario:", error);
        }
    }

    formEditarUsuario.addEventListener("submit", async (evento) => {
        evento.preventDefault();

        const usuarioActualizado = {
            nombre: document.querySelector("#editar-nombre").value,
            apellido: document.querySelector("#editar-apellido").value,
            dni: document.querySelector("#editar-dni").value,
            direccion: document.querySelector("#editar-direccion").value,
            correo: document.querySelector("#editar-correo").value
        };

        try {
            await axios.put(`http://localhost:3030/usuarios/${usuarioId}`, usuarioActualizado);
            // Redireccionar a la página principal o realizar alguna acción después de guardar
            window.location.href = 'crud.html'; // Ejemplo de redirección
        } catch (error) {
            console.error("Error al actualizar usuario:", error);
        }
    });

    cargarDatosUsuario();
});
