const productos = [
    {
        id: 1,
        nombre: "Hamburguesa vegetariana",
        img: "../Imagenes/Destacado1.jpg",
        titulo: "Novedad!",
        precio: 1000,
        descripcion: "Probá nuestra hamburguesa vegetariana. Irresistiblemente fresca!",
        stock: 10,
        montoTotal: 0, //es lo que va a guardar la multiplicacion del precio producto
        //por la cantidad de productos seleccionados
        cantidad: 1
    },
    {
        id: 2,
        nombre: "Sandwich de huevo, queso y panceta",
        img: "../Imagenes/Destacado2.jpg",
        titulo: "25% off!",
        precio: 800,
        descripcion: "Combo mundial. Hace un golazo comiendo rico y gastando menos.",
        stock: 20,
        montoTotal: 0,
        cantidad: 1
    },
    {
        id: 3,
        nombre: "Hamburguesa de pescado",
        img: "../Imagenes/Destacado4.jpg",
        titulo: "Edición limitada",
        precio: 850,
        descripcion: "No te quedes sin probar nuestra hamburguesa crispy de pescado.",
        stock: 40,
        montoTotal: 0,
        cantidad: 1
    },
    {
        id: 4,
        nombre: "Hamburguesa séxtuple",
        img: "../Imagenes/Destacado3.jpg",
        titulo: "Te animas?",
        precio: 1800,
        descripcion: "Probá la hamburguesa más alta. 6 medallones de carne con queso!!!",
        stock: 30,
        montoTotal: 0,
        cantidad: 1
    },

];

//Agregamos cards al carrito, sin repetirlas.
function AgregarSinRepetir(carrito, producto) {
    if (carrito.indexOf(producto) === -1) {
        carrito.push(producto);
        guardarEnStorage("Carrito", carrito);
    }
}


// Convertimos el array de objetos en un formato tipo JSON
const productosEnStorage = JSON.stringify(productos);

// Guardamos en el localstorage el array JSON convertido de productos en String
localStorage.setItem("productos", productosEnStorage);


let productosObtenidosDelStorage = JSON.parse(localStorage.getItem("productos"));


let carrito = [];

const generarCards = (productos) => {
    // div cards de productos.
    let cards = document.getElementById("products");


    // ForEach
    productos.forEach(producto => {



        // Creamos la etiqueta Card
        let cardProductos = document.createElement("div");
        cardProductos.className = "card m-3";

        let card = `
             <img class="card-img-top" src="${producto.img}" alt="Card image cap">
             <div class="card-body >
                 <h4 class="card-title">${producto.nombre}</h4>
                 <p class="card-text">${producto.descripcion}</p>
                 <p class="card-text"> $ ${producto.precio}</p>
                 <a class="btn btn-warning" id="cart${producto.id}">Agregar al Carrito</a>
             </div>
         `;

        // Escribimos el contenido de la plantilla card en la etiqueta div que creamos.
        cardProductos.innerHTML = card;

        // Agregar etiqueta hija dentro de una etiqueta padre.
        cards.appendChild(cardProductos);

        let productCard = document.getElementById("cart" + producto.id);

        productCard.addEventListener("click", (evento) => {
            alert("Agregar al carrito?");
            evento.preventDefault();

            // Agregamos el producto al carrito
            AgregarSinRepetir(carrito, producto);

        });

    });

}


function guardarEnStorage(clave, valor) {
    localStorage.setItem(clave, JSON.stringify(valor));
}


generarCards(productos);


const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    localStorage.setItem("Carrito", JSON.stringify(carrito));
});

//INICIALIZACION PERFIL
(function () {
    if (localStorage.getItem('nombre JSON')) {
        document.querySelectorAll('.usuario_noregistrado').forEach(function (el) {
            el.style.display = 'none';
        });
        document.querySelectorAll('.usuario_registrado').forEach(function (el) {
            el.style.display = 'block';
        });
    }
    else {
        document.querySelectorAll('.usuario_noregistrado').forEach(function (el) {
            el.style.display = 'block';
        });
        document.querySelectorAll('.usuario_registrado').forEach(function (el) {
            el.style.display = 'none';
        });
    }
})();
