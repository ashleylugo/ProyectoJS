//Compra-venta de Dolares

const COMPRAR = 1;
const VENDER = 2;
const COTIZAR = 3;

let tasa1 = 400;
let tasa2 = 300;

alert ("Bienvenido al cotizador");
opcion = parseInt(prompt("Indique que operacion desea realizar \n 1- COMPRAR \n 2- VENDER \n 3- COTIZAR \n" ));

function cotizadorDivisa (){
   
        switch (opcion){

    case COMPRAR:
            num1= parseFloat(prompt("Indique cuantos dolares desea comprar"));
            resultado = num1 * tasa1;
            operacion = "compra";
            alert ( msj = "Para realizar la compra de " + num1 + " dolares debe abonar " + resultado + " pesos.");
            break;
    case VENDER:
            num1= parseFloat(prompt ("Indique cuantos dolares desea vender"));
            resultado = num1 * tasa2;
            operacion = "venta";
            alert ( msj = "Usted recibirá por la venta de " + num1 + " dolares la cantidad de " + resultado + " pesos.");
            break;
    case COTIZAR:
            num1= parseFloat(prompt("Cuantos pesos desea cambiar"));
            resultado = num1 / tasa1;
            operacion = "cotizacion";
            alert ( msj = "Usted recibira la cantidad de " + resultado + " dolares.");
            break; 
        }
}

cotizadorDivisa ();

console.log (msj);

