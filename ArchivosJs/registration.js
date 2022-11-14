const form = document.getElementById("form");

form.addEventListener("submit", e =>{
    e.preventDefault();

    function validate1(){
        var valid = false;

        if(document.getElementById("invalidCheck1").checked){
            valid = true;
        }
        
        return valid;
    }

    function validate2(){
        var valid = false;

        if(document.getElementById("invalidCheck2").checked){
            valid = true;
        }
        
        return valid;
    }

    function redireccion(){
        location.href = "../Pages/login.html";
    }

    if (document.getElementById("inputPassword5").value != document.getElementById("inputPassword6").value){
        alert("Las contrseñas no coinciden, por favor verifique de nuevo.");
    }else if (validate2() == false){
        alert("Tiene que aceptar los Terminos y Condiciones para continuar.");
    }else{

        let personaJSON = {
            "nombre" : document.getElementById("validationCustom01").value,
            "apellido" : document.getElementById("validationCustom02").value, 
            "nombre de usuario" : document.getElementById("validationCustomUsername").value, 
            "correo" : document.getElementById("exampleInputEmail1").value, 
            "contraseña" : document.getElementById("inputPassword5").value, 
            "provincia" : document.getElementById("validationCustom04").value, 
            "departamento" : document.getElementById("validationCustom03").value, 
            "codigo postal" : document.getElementById("validationCustom05").value, 
            "promociones" : validate1(),
            "terminos" : validate2()
        }
    
        let nombre = document.getElementById("validationCustom01").value;
        let apellido = document.getElementById("validationCustom02").value;
        let nombreDeUsuario = document.getElementById("validationCustomUsername").value;
        let correo = document.getElementById("exampleInputEmail1").value;
        let contraseña = document.getElementById("inputPassword5").value;
        let provincia = document.getElementById("validationCustom04").value;
        let departamento = document.getElementById("validationCustom03").value;
        let codigoPostal = document.getElementById("validationCustom05").value;
        let promociones = validate1();
        let terminos = validate2();
    
        localStorage.setItem("nombre JSON", JSON.stringify(personaJSON));
    
        // console.log(`
        //     ${nombre},
        //     ${apellido},
        //     ${nombreDeUsuario},
        //     ${correo},
        //     ${contraseña},
        //     ${provincia},
        //     ${departamento},
        //     ${codigoPostal},
        //     ${promociones},
        //     ${terminos}
        // `)
    
        localStorage.setItem(
            "nombre", nombre,
            "apellido", apellido,
            "usuario", nombreDeUsuario,
            "correo", correo,
            "contraseña", contraseña,
            "provincia", provincia,
            "departamento", departamento,
            "codigo postal", codigoPostal,
            "promociones", promociones,
            "terminos", terminos
        );
    
        // let personaJSONObtenido = JSON.parse(localStorage.getItem("nombre JSON"));
    
        // console.table(personaJSONObtenido);
        
        alert("Registro Exitoso, se redireccionara al Login.");
        redireccion();
    }
})