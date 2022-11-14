// PASOS

// Obtener el evento onclick del usuario en los botones agregar al carrito

// En el evento, agregar el producto seleccionado al array del carrito

// Obtenemos los datos del carrito
let carrito = [];
var btnVaciar = document.getElementById("btnVaciar");
var resultadoCantidad;


//Ver si hace falta agregar algo después.
function vacio() {
    if (carrito.length === 0) {

        alert("Agregue productos al carrito")
    } else {
        alert("Compra exitosa!");
    }
    vaciarCarrito()
    btnComprar.disabled = true;
    btnVaciar.disabled = true;
}

//Calcular precio total.

function CalcularMontoTotal() {
    if (carrito != []) {
        const total = carrito.reduce((resultado, cantidad) => { return (resultado + cantidad.montoTotal); }, 0);
        return (total)
    }
    localStorage.setItem("PrecioTotal", JSON.stringify(total));
}
// Validamos que tenemos datos cargados en el carrito en el storage
if (localStorage.getItem("Carrito")) {
    carrito = JSON.parse(localStorage.getItem("Carrito"));
}
//Resta el monto total del carrito - monto total del producto eliminado;
function eliminarPrecio(montoTotalProducto) {
    let montoProductos = CalcularMontoTotal();
    return montoProductos - montoTotalProducto;
}

function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    total = 0;
    document.getElementById("carrito").remove();
    localStorage.setItem("PrecioTotal", JSON.stringify(total));
    localStorage.setItem("Carrito", JSON.stringify(carrito));
    btnComprar.disabled = true;
    btnVaciar.disabled = true;
    document.getElementById("PrecioTotal").innerHTML = "Carrito vacío."
}

const generarCards = (productos) => {
    //div que contendra las cards de productos.

    let cards = document.getElementById("carrito");
    const btnComprar = document.getElementById("btnComprar");

    let total = 0;

    
    productos.forEach( producto => {
        
        /*total += producto.precio;  // total = total + producto.precio;*/

        // Creamos la etiqueta Card
        var cardProductos = document.createElement("div");
        cardProductos.className.add = "card m-3 img-thumbnail";
        
        let card = `
        <div id="carrito${producto.id}">
        <img class="img-thumbnail" src="${producto.img}" alt="Card image cap">
            <div class="card-body">
                <h6 class="card-title">${producto.nombre}</h6>
                <p class="card-text">
                   $ ${producto.precio}
                </p>
            <p class="card-text">
            Cantidad </p>
            <p class="card-text">
            <input type="number" min="1" pattern="^[0-9]+"  class="form-control" id="IngreseCantidad${producto.id}" placeholder="1" aria-label="Cantidad">

            <div class="form-control" placeholder="Leave a comment here" id="floatingTextarea">
            <label for="floatingTextarea" id="PrecioCantidad${producto.id}"><b>$</b></label>
            </p></div>
            <a class="btn btn-warning" id="Cantidad${producto.id}">Continuar</a> <!--agregar btn agregar-->
            <a class="btn btn-success" id="cart${producto.id}">Eliminar</a>
            </div>
            </div>
        `;
        
        cardProductos.innerHTML = card;
        cards.appendChild(cardProductos);
        let productCard = document.getElementById("cart" + producto.id);
        productCard.style.margin = "10px";

        //Eliminar productos del carrito y las cards del DOM
        productCard.addEventListener("click", (evento) => {
           
            evento.preventDefault();
            let posicion;
            for (let i = 0; i <= carrito.length - 1; i++){
                let posCarrito = carrito[i].id;
                let posProducto = producto.id;
                if (posCarrito === posProducto) {
                    posicion = i;
                }
            }

            let precioEnCarrito = carrito[posicion].montoTotal;
            document.getElementById("PrecioTotal").innerHTML = "Total a pagar: $" + eliminarPrecio(precioEnCarrito);
            carrito.splice(posicion, 1);
            localStorage.setItem("Carrito", JSON.stringify(carrito));
            document.getElementById("carrito" + producto.id).remove();
           
        });

    
        window.addEventListener("load", (evento) => {
            evento.preventDefault();
            document.getElementById("PrecioCantidad" + producto.id).innerHTML = "$" + producto.precio;
        })

        //Calcular precio por cantidad ingresada.
        productCard = document.getElementById("Cantidad" + producto.id);

       
        productCard.addEventListener("click", (evento) => {
            
            evento.preventDefault(); 

            let cantidadProd

            //si input "IngreseCantidad" es 1 o + asignarle dicho valor
            //sino asignarle el valor 1
            if (document.getElementById("IngreseCantidad" + producto.id).value >= 1) {
                cantidadProd = document.getElementById("IngreseCantidad" + producto.id).value;
            } else {
                cantidadProd = 1;
                document.getElementById("IngreseCantidad" + producto.id).value = 1;
            }

            let posicion;
            for (let i = 0; i <= carrito.length - 1; i++){
                let posCarrito = carrito[i].id;
                let posProducto = producto.id;
                if (posCarrito === posProducto) {
                    posicion = i;
                }
            }
            let precio = producto.precio;
             
            resultadoCantidad = cantidadProd * precio;
            carrito[posicion].montoTotal = resultadoCantidad;
            document.getElementById("PrecioCantidad" + producto.id).innerHTML = "$" + carrito[posicion].montoTotal;
            localStorage.setItem("Carrito", JSON.stringify(carrito)); 
            productCard.style.margin = "10px"
             //Sumar monto total carrito.
            CalcularMontoTotal();
        });

        productCard.addEventListener("click", (evento) => {
            evento.preventDefault();
            const btnComprar = document.getElementById("btnComprar");
            let PrecioTotal = document.getElementById("PrecioTotal").value;
            document.getElementById("PrecioTotal").innerHTML = "Total a pagar: $" + CalcularMontoTotal();
        })
        })
}

generarCards(carrito);

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    localStorage.setItem("Carrito", JSON.stringify(carrito));
})

