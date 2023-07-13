alert("Bienvenidos a Grey Bar");

const reservas = prompt("¿Desea hacer una reserva?");

const horario1 = ("19hs");
const horario2 = ("19:30hs");
const horario3 = ("20hs");
const horario4 = ("20:30hs");
const horario5 = ("21hs");
const horario6 = ("21:30hs");
const horario7 = ("22hs");
const horario8 = ("22:30hs");

function saludo() {
    alert("Gracias" + " " + nombreYapellido + " " + "Los esperamos! Recuerden que tiene una tolerancia de 15 minutos maximo para tomar su reserva");
}

switch (reservas) {
    case "si":
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
                alert("El horario que ingreso no es correcto o no esta disponible")
                break;
        }
        let opinion = prompt("Ingrese aclaracion sobre la reserva o escriba fin");
        while (opinion != "fin") {
            alert("Gracias por su aclaracion");
            opinion = prompt("Ingrese aclaracion sobre la reserva o escriba fin");
        }
        console.log("Fin del while");
        break;
    case "no":
        alert("Los esperamos pronto");
        break;
    default:
        alert("Ingrese si para reservar");
        break;

}


