alert("Bienvenidos a Grey Bar");

const horario1 = ("19hs");
const horario2 = ("19:30hs");
const horario3 = ("20hs");
const horario4 = ("20:30hs");
const horario5 = ("21hs");
const horario6 = ("21:30hs");
const horario7 = ("22hs");
const horario8 = ("22:30hs");

const productos = [
    { nombre: "Grey Burger", precio: 1000 },
    { nombre: "The King Burger", precio: 2000 },
    { nombre: "Lady Burger", precio: 1200 },
    { nombre: "Big Grey", precio: 1800 }
];

let carrito = [];


let pregunta = prompt("¿Desea hacer una reserva o desea realizar un pedido? \n Escriba reservar o pedido, porfavor");

function saludo() {
    alert("Gracias" + " " + nombreYapellido + " " + "Los esperamos! Recuerden que tiene una tolerancia de 15 minutos maximo para tomar su reserva");
}

while (pregunta != "reservar" && pregunta != "pedido") {
    alert("Por favor ingresa reservar o pedido");
    pregunta =prompt("Si desea hacer una reserva escriba reservar, si desea hacer un pedido escriba pedido")
}

if (pregunta == "pedido") {
    alert("A continuacion nuestra lista de productos");
    let todoslosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    console.log (todoslosProductos.join(" \n "));

} else if (pregunta == "reservar") {
    nombreYapellido = prompt("Ingrese su nombre y apellido porfavor");
    cantidadPersonas = parseInt(prompt("Ingrese cantidad de personas"));
    horario = prompt("Ingrese horario" + " " + "(" + horario1 + " " + horario2 + " " + horario3 + " " + horario4 + " " + horario5 + " " + horario6 + " " + horario7 + " " + horario8 + ")");

    switch (horario) {
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

    let opinion = prompt("Ingrese aclaracion sobre la reserva o escriba fin");
    while (opinion != "fin") {
        alert("Gracias por su aclaracion, los esperamos!");
    }
    console.log("Fin del while");

}


while (pregunta != "reservar") {
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
    pregunta = prompt("Desea seguir comprando? \n escriba si o no")
    while (pregunta === "no") {
        alert("Gracias por la compra!")
        carrito.forEach((carritoFinal) => {
            alert(`producto: ${carritoFinal.producto}, unidades:${carritoFinal.unidades}, total a pagar ${carritoFinal.unidades * carritoFinal.precio}`);
        })
        const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
        alert(`El total a pagar por su compra es: ${total}`);
    }

}

console.log("Fin del while");


















