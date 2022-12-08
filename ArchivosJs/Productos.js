const products = document.querySelector(".container");
const bigBurguers = document.querySelector(".big");
const littleBurguers = document.querySelector(".little");
const veggy = document.querySelector(".veg");
const edicion = document.querySelector(".limit");

function createCard([img, title, description, price]){
    let code = `
        <div class="col" id="cont-card">
            <div class="card m-4 img-fluid" id="tarjeta">
            <img src="${img}" class="card-img-top" alt="${title}">
            <div class="card-body align-middle" id="body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
                <p class="card-text">${price}</p>
                <a href="../Pages/Carrito.html" class="btn btn-primary">Agregar al carrito</a>
            </div>
            </div>
        </div>
    `;
    bigBurguers.innerHTML += code;
}

let item1 = [
    "../Imagenes/Promo4.jpg",
    "Hamburguesa doble de lechuga, tomate y cebolla dorada",
    "Dos medallones de la mejor carne de res, con tomate, lechuga y cebolla morada ",
    "$1200"];

let item2 = [
    "../Imagenes/Destacado3.jpg",
    "Hamburguesa séxtuple de carne y queso",
    "Seis medallones de la mejor carne de res con queso",
    "$1800"];

let item3 = [
    "../Imagenes/BigBurguer3.jpg",
    "Hamburguesa tapa arterias",
    "Hamburguesa con panceta, huevo frito, queso, lechuga y salsa barbacoa",
    "$1300"];

let item4 = [
    "../Imagenes/BigBurguer4.jpg",
    "Hamburguesa completa",
    "Hamburguesa con champignones, cebolla morada, morrón, lechuga y queso cheddar",
    "$1300"];

function createCard2([img, title, description, price]){
    let code2 = `
        <div class="col" id="cont-card">
            <div class="card m-4 img-fluid" id="tarjeta">
            <img src="${img}" class="card-img-top" alt="${title}">
            <div class="card-body align-middle" id="body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
                <p class="card-text">${price}</p>
                <a href="../Pages/Carrito.html" class="btn btn-primary">Agregar al carrito</a>
            </div>
            </div>
        </div>
    `;
    littleBurguers.innerHTML += code2;
}

let item5 = [
    "../Imagenes/Promo5.jpg",
    "Hamburguesa de pollo",
    "Hamburguesa de pollo con cebolla morada, pepino y queso cheddar",
    "$1000"];

let item6 = [
    "../Imagenes/Promo3.jpg",
    "Hamburguesa mediterranea",
    "Hamburguesa con cebolla, pepino, lechuga, queso boconccino y albahaca",
    "$1200"];

let item7 = [
    "../Imagenes/Promo1.jpg",
    "Hamburguesa simple",
    "Hamburguesa con pepino, lechuga, queso cheddar y tomate",
    "$1000"];

let item8 = [
        "../Imagenes/Promo2.jpg",
        "Hamburguesa fresca",
        "Hamburguesa con cebolla, pepino, cebolla de verdeo, queso cheddar, tomate y ketchup",
        "$1100"];

function createCard3([img, title, description, price]){
    let code3 = `
        <div class="col" id="cont-card">
            <div class="card m-4 img-fluid" id="tarjeta">
            <img src="${img}" class="card-img-top" alt="${title}">
            <div class="card-body align-middle" id="body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
                <p class="card-text">${price}</p>
                <a href="../Pages/Carrito.html" class="btn btn-primary">Agregar al carrito</a>
            </div>
            </div>
        </div>
    `;
    veggy.innerHTML += code3;
}
        
let item9 = [
    "../Imagenes/Vegetariana1.jpg",
    "Hamburguesa de tofu",
    "Hamburguesa de tofu, pesto y huevo",
    "$1200"];
        
let item10 = [
    "../Imagenes/Vegetariana2.jpg",
    "Hamburguesa de berenjena",
    "Hamburguesa de berenjena empanizada con tomate y lechuga",
    "$1200"];
        
let item11 = [
    "../Imagenes/Vegetariana3.jpg",
    "Hamburguesa de remolacha",
    "Hamburguesa de remolacha al vino tinto con lechuga escarola y pepino",
    "$1000"];

let item12 = [
    "../Imagenes/Vegetariana4.jpg",
    "Hamburguesa de zuchini",
    "Hamburguesa de zuchini con remolacha rallada y lechuga",
    "$1000"];

function createCard4([img, title, description, price]){
    let code4 = `
        <div class="col" id="cont-card">
            <div class="card m-4 img-fluid" id="tarjeta">
            <img src="${img}" class="card-img-top" alt="${title}">
            <div class="card-body align-middle" id="body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
                <p class="card-text">${price}</p>
                <a href="../Pages/Carrito.html" class="btn btn-primary">Agregar al carrito</a>
            </div>
            </div>
        </div>
    `;
    edicion.innerHTML += code4;
}

let item13 = [
    "../Imagenes/Destacado1.jpg",
    "Hamburguesa de cordero",
    "Hamburguesa de carne de cordero con lechuga, tomate, pepino y salsa ranchera",
    "$1300"];
    
let item14 = [
    "../Imagenes/Destacado2.jpg",
    "Hamburguesa mundial",
    "Hamburguesa de entraña con cebolla morada, tomate, lechuga y queso cheddar",
    "$1300"];
    
let item15 = [
    "../Imagenes/Destacado4.jpg",
    "Hamburguesa de pescado",
    "Hamburguesa de pescado empanizado con lechuga y tomate",
    "$1200"];
    
let item16 = [
    "../Imagenes/Limitada.jpg",
    "Hamburguesa con pan negro",
    "Hamburguesa de pollo con chimi churri, rúcula, zuchini, cebolla morada y tomate",
    "$1300"];
    
createCard(item1); 
createCard(item2);
createCard(item3);
createCard(item4);
createCard2(item5); 
createCard2(item6);
createCard2(item7);
createCard2(item8);
createCard3(item9); 
createCard3(item10);
createCard3(item11);
createCard3(item12);
createCard4(item13); 
createCard4(item14);
createCard4(item15);
createCard4(item16);