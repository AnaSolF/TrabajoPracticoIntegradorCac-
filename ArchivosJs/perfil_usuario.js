//SETEO INICIAL DE DATOS
(function () {
    if (localStorage.getItem('nombre JSON')) {
        const usuario_actual = JSON.parse(localStorage.getItem('nombre JSON'));

        document.getElementById("texto_usuario").innerText = "Bienvenid@, " + usuario_actual["nombre"] + "" + usuario_actual["apellido"];

        document.getElementById("nombre_usuario").value = usuario_actual["nombre"];
        document.getElementById("apellido_usuario").value = usuario_actual["apellido"];
        document.getElementById("dni_usuario").value = usuario_actual["dni"] != undefined ? usuario_actual["dni"] : "";
        document.getElementById("genero_usuario").value = usuario_actual["genero"] != undefined ? usuario_actual["genero"] : "";
        document.getElementById("telefono_usuario").value = usuario_actual["telefono"] != undefined ? usuario_actual["telefono"] : "";
        document.getElementById("email_usuario").value = usuario_actual["correo"];
        document.getElementById("nickname_usuario").value = usuario_actual["nombre de usuario"];
        document.getElementById("nickname_usuario_password").value = usuario_actual["nombre de usuario"];
    }

    if (localStorage.getItem('direcciones')) {
        const direcciones = JSON.parse(localStorage.getItem('direcciones'));

        document.getElementById("provincia_usuario").value = direcciones.provincia;
        document.getElementById("localidad_usuario").value = direcciones.localidad;
        document.getElementById("barrio_usuario").value = direcciones.barrio;
        document.getElementById("calle_usuario").value = direcciones.calle;
        document.getElementById("numero_usuario").value = direcciones.numero;
        document.getElementById("departamento_usuario").value = direcciones.departamento;
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
    let nombre_usuario = document.getElementById("nickname_usuario").value;

    //VALIDACION USUARIO A ACTUALIZAR POR NOMBRE USUARIO INGRESADO
    if (localStorage.getItem('nombre JSON')) {
        const usuario_actual = JSON.parse(localStorage.getItem('nombre JSON'))
        if (nombre_usuario != usuario_actual["nombre de usuario"]) {
            alert("Usuario no registrado");
            return false;
        }
        else {

            //NUEVO USUARIO ACTUALIZADO
            let usuario_update = {
                "nombre": nombre,
                "apellido": apellido,
                "nombre de usuario": nombre_usuario,
                "correo": email,
                "contraseña": usuario_actual["contraseña"],
                "provincia": usuario_actual["provincia"],
                "departamento": usuario_actual["departamento"],
                "codigo postal": usuario_actual["codigo postal"],
                "promociones": usuario_actual["promociones"],
                "terminos": usuario_actual["terminos"],
                "dni": dni,
                "genero": genero,
                "telefono": telefono
            }

            //ACTUALIZAMOS DATOS DEL USUARIO
            localStorage.setItem("nombre JSON", JSON.stringify(usuario_update));

            //CHEQUEAMOS ACTUALIZACION
            let registro_obtenido = JSON.parse(localStorage.getItem("nombre JSON"));

            console.table(registro_obtenido);

            alert("Sus datos han sido actualizados");
            setTimeout(() => {
                location.reload();
            }, 1000);
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

    alert("Sus datos han sido actualizados");
    setTimeout(() => {
        location.reload();
    }, 1000);
})

// ACTUALIZACION PASSWORD
const form_password = document.getElementById("form_password");

form_password.addEventListener("submit", e => {
    e.preventDefault();

    // OBTENCION CAMPOS INDICADOS POR EL USUARIO
    let nombre_usuario = document.getElementById("nickname_usuario_password").value;
    let password = document.getElementById("password_usuario").value;
    let nueva_password = document.getElementById("password_nueva_usuario").value;
    let nueva_password_confir = document.getElementById("password_nueva_confir_usuario").value;

    //VALIDACION PASSWORD IGUALES
    if (nueva_password.toString() != nueva_password_confir.toString()) {
        alert("Las contrase&ntilde;as deben ser iguales");
        return false;
    }

    //VALIDACION USUARIO A ACTUALIZAR POR NOMBRE USUARIO INGRESADO
    if (localStorage.getItem('nombre JSON')) {
        const usuario_actual = JSON.parse(localStorage.getItem('nombre JSON'));
        if (nombre_usuario != usuario_actual["nombre de usuario"]) {
            alert("Usuario no registrado");
            return false;
        }
        else if (password != usuario_actual["contraseña"]) {
            alert("La contraseña no coincide con la utilizada actualmente");
            return false;
        }
        else {

            //NUEVO USUARIO ACTUALIZADO
            //NUEVO USUARIO ACTUALIZADO
            let usuario_update = {
                "nombre": usuario_actual["nombre"],
                "apellido": usuario_actual["apellido"],
                "nombre de usuario": usuario_actual["nombre de usuario"],
                "correo": usuario_actual["correo"],
                "contraseña": nueva_password,
                "provincia": usuario_actual["provincia"],
                "departamento": usuario_actual["departamento"],
                "codigo postal": usuario_actual["codigo postal"],
                "promociones": usuario_actual["promociones"],
                "terminos": usuario_actual["terminos"],
                "dni": usuario_actual["dni"],
                "genero": usuario_actual["genero"],
                "telefono": usuario_actual["telefono"],
            }

            //ACTUALIZAMOS DATOS DEL USUARIO
            localStorage.setItem("usuario", JSON.stringify(usuario_update));

            //CHEQUEAMOS ACTUALIZACION
            let registro_obtenido = JSON.parse(localStorage.getItem("nombre JSON"));

            console.table(registro_obtenido);

            alert("Sus datos han sido actualizados");
            setTimeout(() => {
                location.reload();
            }, 1000);
        }
    } else {
        alert("Usuario no registrado");
        return false;
    }
})

//CIERRE SESION
function cerrar_sesion() {
    localStorage.clear();
    setTimeout(() => {
        location.href = "../Pages/login.html";
    }, 500);
}