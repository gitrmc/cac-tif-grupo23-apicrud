//no
document.addEventListener("DOMContentLoaded", () => {
  // obtener el cuerpo de la tabla donde se muestran los posteos
  const bodyTablaUsuarios = document.querySelector("#body-tabla-usuario");
  // obtener el formulario para crear un nuevo posteo
  const formCrearUsuario = document.querySelector("#form-crear-usuario");

  /* funcion para obtener los datos de la API usando Axios */
  const fetchUsuarios = async () => {
    try {
      const respuesta = await axios.get(`http://localhost:3030/usuarios`);
      //console.log(respuesta.data);
      const usuarios = respuesta.data;

      /*     limpiar la tabla antes de agregar los nuevos datos */
      bodyTablaUsuarios.innerHTML = "";

      // interar sobre los datos y agregar los nuevos datos
      usuarios.forEach(usuario => {
        /* crear una nueva fila */
        const fila = document.createElement("tr");
        // crear celdas para el nombre, apellido, dni, direccion y correo.-
        const celdaNombre = document.createElement("td");
        const celdaApellido = document.createElement("td");
        const celdaDNI = document.createElement("td");
        const celdaDireccion = document.createElement("td");
        const celdaCorreo = document.createElement("td");
        const celdaEliminar = document.createElement("td");
        const celdaEditar = document.createElement("td");

        // asignar el contenido de las celdas
        celdaNombre.textContent = usuario.nombre;
        celdaApellido.textContent = usuario.apellido;
        celdaDNI.textContent = usuario.dni;
        celdaDireccion.textContent = usuario.direccion;
        celdaCorreo.textContent = usuario.correo;

        // crear boton de eliminar
        const botonEliminar = document.createElement("button");
        botonEliminar.innerHTML = '<i class="fas fa-trash-alt"></i>';
        botonEliminar.classList.add("btn-eliminar");
        botonEliminar.addEventListener("click", () => {
          borrarUsuario(usuario.id);
        }) // ojo con esto

        // crear boton para editar
        const botonEditar = document.createElement("button");
        botonEditar.innerHTML = '<i class="fas fa-edit"></i>';
        botonEditar.classList.add("btn-editar");
        botonEditar.addEventListener("click", () => {
          //redirigir a la pagina de edicion
          window.location.href = `edit.html?id=${usuario.id}`
        });
        // agregar los botones a la celda de acciones
        celdaEliminar.appendChild(botonEliminar);
        celdaEditar.appendChild(botonEditar);

        // agregar las celdas a la fila
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaApellido);
        fila.appendChild(celdaDNI);
        fila.appendChild(celdaDireccion);
        fila.appendChild(celdaCorreo);
        fila.appendChild(celdaEliminar);
        fila.appendChild(celdaEditar);
        // agregar la fila al cuerpo de la tabla
        bodyTablaUsuarios.appendChild(fila);
      })

    } catch (error) {
      console.error("error para cargar usuarios :", error);
    }
  }
  // funcion para borrar un usuario

  const borrarUsuario = async (id) => {
    try {
      await axios.delete(`http://localhost:3030/usuarios/${id}`);
      fetchUsuarios();
    } catch (error) {
      console.error("error para borrar usuarios :", error);
    }
  }

  // funcion para crear un usuario.-

  // pasar a funcion flecha
  formCrearUsuario.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    const nuevoUsuario = {
      nombre: document.querySelector("#nuevo-nombre").value,
      apellido: document.querySelector("#nuevo-apellido").value,
      dni: document.querySelector("#nuevo-dni").value,
      direccion: document.querySelector("#nuevo-direccion").value,
      correo: document.querySelector("#nuevo-correo").value
    };

    try {
      await axios.post(`http://localhost:3030/usuarios/`, nuevoUsuario);
      //limpiamos el formulario
      formCrearUsuario.reset();
      //recargar la lista de usuarios despues de crear uno nuevo
      fetchUsuarios();
    } catch (error) {
      console.error("error al crear usuario :", error);
    }

  });
  //llamar a la funcion para obtener y mostrar los usuario al cargar la pagina
  fetchUsuarios();
});

