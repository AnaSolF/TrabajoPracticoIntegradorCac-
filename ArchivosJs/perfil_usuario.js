//SETEO INICIAL DE DATOS
(function () {
    if (localStorage.getItem('usuario')) {
        const usuario_actual = JSON.parse(localStorage.getItem('usuario'));

        document.getElementById("texto_usuario").value = usuario_actual.nombre + "" + usuario_actual.apellido;

        document.getElementById("nombre_usuario").value = usuario_actual.nombre;
        document.getElementById("apellido_usuario").value = usuario_actual.apellido;
        document.getElementById("dni_usuario").value = usuario_actual.dni;
        document.getElementById("genero_usuario").value = usuario_actual.genero;
        document.getElementById("telefono_usuario").value = usuario_actual.telefono;
        document.getElementById("email_usuario").value = usuario_actual.email;
        document.getElementById("nombre_usuario").value = usuario_actual.nombre_usuario;
        document.getElementById("nombre_usuario_password").value = usuario_actual.nombre_usuario;
    }
})();

function change_Tab(id) {
    var sel = document.querySelector('#' + id);
    bootstrap.Tab.getOrCreateInstance(sel).show();

    Array.from(document.querySelectorAll('.menu_usuario li')).forEach(function (el) {
        el.classList.remove('active');
    });

    const el = document.querySelector('#li-' + id);
    el.classList.add("active");

}

// ACTUALIZACION DATOS PERFIL
const form_perfil = document.getElementById("form_perfil");

form_perfil.addEventListener("submit", e => {
    e.preventDefault();

    // OBTENCION CAMPOS INDICADOS POR EL USUARIO
    let nombre = document.getElementById("nombre_usuario").value;
    let apellido = document.getElementById("apellido_usuario").value;
    let dni = document.getElementById("dni_usuario").value;
    let genero = document.getElementById("genero_usuario").value;
    let telefono = document.getElementById("telefono_usuario").value;
    let email = document.getElementById("email_usuario").value;
    let nombre_usuario = document.getElementById("nombre_usuario").value;

    //VALIDACION USUARIO A ACTUALIZAR POR NOMBRE USUARIO INGRESADO
    if (localStorage.getItem('usuario')) {
        const usuario_actual = JSON.parse(localStorage.getItem('usuario'))
        if (nombre_usuario != usuario_actual.nombre_usuario) {
            alert("Usuario no registrado");
            return false;
        }
        else {

            //NUEVO USUARIO ACTUALIZADO
            let usuario_update = {
                "nombre": nombre,
                "apellido": apellido,
                "dni": dni,
                "genero": genero,
                "telefono": telefono,
                "email": email,
                "password": usuario_actual.password
            }

            //ACTUALIZAMOS DATOS DEL USUARIO
            localStorage.setItem("usuario", JSON.stringify(usuario_update));

            //CHEQUEAMOS ACTUALIZACION
            let registro_obtenido = JSON.parse(localStorage.getItem("usuario"));

            console.table(registro_obtenido);
        }
    } else {
        alert("Usuario no registrado");
        return false;
    }
})


// ACTUALIZACION DATOS DIRECCION
const form_direcciones = document.getElementById("form_direcciones");

form_direcciones.addEventListener("submit", e => {
    e.preventDefault();

    // OBTENCION CAMPOS INDICADOS POR EL USUARIO
    let provincia = document.getElementById("provincia_usuario").value;
    let localidad = document.getElementById("localidad_usuario").value;
    let barrio = document.getElementById("barrio_usuario").value;
    let calle = document.getElementById("calle_usuario").value;
    let numero = document.getElementById("numero_usuario").value;
    let departamento = document.getElementById("departamento_usuario").value;

    //NUEVO USUARIO ACTUALIZADO
    let direccion_update = {
        "provincia": provincia,
        "localidad": localidad,
        "barrio": barrio,
        "calle": calle,
        "numero": numero,
        "departamento": departamento,
    }

    //ACTUALIZAMOS DATOS 
    localStorage.setItem("direcciones", JSON.stringify(direccion_update));

    //CHEQUEAMOS ACTUALIZACION
    let registro_obtenido = JSON.parse(localStorage.getItem("direcciones"));

    console.table(registro_obtenido);
})

// ACTUALIZACION PASSWORD
const form_password = document.getElementById("form_password");

form_password.addEventListener("submit", e => {
    e.preventDefault();

    // OBTENCION CAMPOS INDICADOS POR EL USUARIO
    let nombre_usuario = document.getElementById("nombre_usuario_password").value;
    let password = document.getElementById("password_usuario").value;
    let nueva_password = document.getElementById("password_nueva_usuario").value;
    let nueva_password_confir = document.getElementById("password_nueva_confir_usuario").value;

    //VALIDACION PASSWORD IGUALES
    if (nueva_password.toString() != nueva_password_confir.toString()) {
        alert("Las contrase&ntilde;as deben ser iguales");
        return false;
    }

    //VALIDACION USUARIO A ACTUALIZAR POR NOMBRE USUARIO INGRESADO
    if (localStorage.getItem('usuario')) {
        const usuario_actual = JSON.parse(localStorage.getItem('usuario'));
        if (nombre_usuario != usuario_actual.nombre_usuario) {
            alert("Usuario no registrado");
        }
        else {

            //NUEVO USUARIO ACTUALIZADO
            let usuario_update = {
                "nombre": usuario_actual.nombre,
                "apellido": usuario_actual.apellido,
                "dni": usuario_actual.dni,
                "genero": usuario_actual.genero,
                "telefono": usuario_actual.telefono,
                "email": usuario_actual.email,
                "password": nueva_password
            }

            //ACTUALIZAMOS DATOS DEL USUARIO
            localStorage.setItem("usuario", JSON.stringify(usuario_update));

            //CHEQUEAMOS ACTUALIZACION
            let registro_obtenido = JSON.parse(localStorage.getItem("usuario"));

            console.table(registro_obtenido);
        }
    } else {
        alert("Usuario no registrado");
        return false;
    }
})