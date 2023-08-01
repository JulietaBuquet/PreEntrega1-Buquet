alert("Bienvenidos a Grey Bar");
const horarios = ["19hs", "19:30hs", "20hs", "20:30hs", "21hs", "21:30hs", "22hs", "22:30hs"];

const productos = [
    { nombre: "Grey Burger", precio: 1000 },
    { nombre: "The King Burger", precio: 2000 },
    { nombre: "Lady Burger", precio: 1200 },
    { nombre: "Big Grey", precio: 1800 }
];

let carrito = [];

function saludo() {
    alert("Gracias" + " " + nombreYapellido + " " + "Los esperamos! Recuerden que tiene una tolerancia de 15 minutos maximo para tomar su reserva");
};

function finCompra() {
    carrito.forEach((carritoFinal) => {
        alert(`producto: ${carritoFinal.producto}, unidades:${carritoFinal.unidades}, total a pagar ${carritoFinal.unidades * carritoFinal.precio}`);
    })
    const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
    alert(`El total a pagar por su compra es: ${total}, gracias por su compra!`);
}

function compra() {
    let producto = prompt("Agrega un producto a tu carrito");
    let precio = 0;
    if (producto == "Grey Burger" || producto == "The King Burger" || producto == "Lady Burger" || producto == "Big Grey") {
        switch (producto) {
            case "Grey Burger":
                precio = 1000;
                break;
            case "The King Burger":
                precio = 2000;
                break;
            case "Lady Burger":
                precio = 1200;
                break;
            case "Big Grey":
                precio = 1800;
                break;
            default:
                break;
        }
        let unidades = parseInt(prompt("Cuantas unidades quiere llevar?"));

        carrito.push({ producto, unidades, precio });
        console.log(carrito);
    } else {
        alert("No tenemos ese producto");
    }
    const seguirComprando = prompt("Desea seguir comprando? \n escriba si o no");
    if (seguirComprando == "si") {
        compra();
    } else if (seguirComprando =="no"){
        finCompra();
    }

}

const pregunta = prompt("¿Desea hacer una reserva o un pedido? \n Escriba reservar o pedido porfavor");

switch (pregunta) {
    case "reservar":
        nombreYapellido = prompt("Ingrese su nombre y apellido porfavor");
        cantidadPersonas = parseInt(prompt("Ingrese cantidad de personas"));
        horarios.forEach(Element => console.log(Element));
        hora = prompt("Ingrese horario de la reserva");
        switch (hora) {
            case "19hs":
                saludo();
                break;
            case "19:30hs":
                saludo();
                break;
            case "20hs":
                saludo();
                break;
            case "20:30hs":
                saludo();
                break;
            case "21hs":
                saludo();
                break;
            case "21:30hs":
                saludo();
                break;
            case "22hs":
                saludo();
                break;
            case "22:30hs":
                saludo();
                break;
            default:
                alert("El horario que ingreso no es correcto o no esta disponible");
                break;
        }
        let opinion = prompt("Si desea hacer una aclaracion sobre su reserva indiquelo aqui, de lo contrario escriba no");
        if (opinion != "no") {
            alert("Gracias por su aclaracion, los esperamos!");
        } else {
            alert("Los esperamos!")
        }
        break;
    case "pedido":
        alert("A continuacion nuestra lista de productos");
        let todoslosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
        console.log(todoslosProductos.join(" \n "));
        compra()
        break;
    default:
        alert("Ingrese reservar o pedido porfavor");
        break;

}




















