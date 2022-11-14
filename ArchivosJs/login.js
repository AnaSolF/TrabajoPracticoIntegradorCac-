const form = document.getElementById("form");

form.addEventListener("submit", e =>{
    e.preventDefault();

    let usuario = document.getElementById("exampleInputEmail1").value;
    let contraseña = document.getElementById("exampleInputPassword1").value;

    // faltan validaciones con base de datos de usuarios.
})