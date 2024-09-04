
// Variables
let objetosElegidos = 0;
let objetosTotales = 0;
let totalValue = 0;
let totalCost = 0;
let clientExit = false;

// Product qty variables
let c1MaxQty = 9;
let c2MaxQty = 9;
let c3MaxQty = 9;
let c4MaxQty = 9;
let c5MaxQty = 9;

//Product price variables
let c1Price = 1400;
let c2Price = 900;
let c3Price = 1200;
let c4Price = 600;
let c5Price = 1300;

// Array
let priceList = [];


// Start

let optionToBuy = parseInt(prompt("Elija alguna de las siguientes opciones: 1- Continuar a tienda. 2- Salir"))
if (optionToBuy == 1) {
    clientPurchasing();
}



// Functions


function clientPurchasing() {
    while (optionToBuy) {
        let catalogo = parseInt(prompt("Tenemos 5 articulos para mostrarte, ¿Cual te gustaria ver? Escribe un numero del 1 al 5. O 6 para salir"))
        switch (catalogo) {
            case 1:
                let buyC1 = parseInt(prompt("Camisa deportiva por: " + c1Price + " la deseas agregar?. 1- Si - 2- No."));
                if (buyC1 == 1) {
                    let c1Qty = parseInt(prompt("Cuantos quieres comprar? cantidad máxima disponible: " + c1MaxQty))
                    if (c1Qty <= c1MaxQty) {
                        priceList.push(c1Price * c1Qty)
                    }
                    else {
                        prompt("Opción no valida");
                        break;
                    }
                }
                else if (buyC1 == 2) {
                    break;
                }
                else {
                    prompt("Opción no valida");
                }
                break;
            case 2:
                let buyC2 = parseInt(prompt("Camisa formal por: " + c2Price + " la deseas agregar?. 1- Si - 2- No."));
                if (buyC2 == 1) {
                    let c2Qty = parseInt(prompt("Cuantos quieres comprar? cantidad máxima disponible: " + c2MaxQty))
                    if (c2Qty <= c2MaxQty) {
                        priceList.push(c2Price * c2Qty)
                    }
                    else {
                        prompt("Opción no valida");
                        break;
                    }
                }
                else if (buyC2 == 2) {
                    break;
                }
                else {
                    prompt("Opción no valida");
                }
                break;
            case 3:
                let buyC3 = parseInt(prompt("Tenis depostivos por: " + c3Price + " los deseas agregar?. 1- Si - 2- No."));
                if (buyC3 == 1) {
                    let c3Qty = parseInt(prompt("Cuantos quieres comprar? cantidad máxima disponible: " + c3MaxQty))
                    if (c3Qty <= c3MaxQty) {
                        priceList.push(c3Price * c3Qty)
                    }
                    else {
                        prompt("Opción no valida");
                        break;
                    }
                }
                else if (buyC3 == 2) {
                    break;
                }
                else {
                    prompt("Opción no valida");
                }
                break;
            case 4:
                let buyC4 = parseInt(prompt("Reloj depostivo por: " + c4Price + " lo deseas agregar?. 1- Si - 2- No."));
                if (buyC4 == 1) {
                    let c4Qty = parseInt(prompt("Cuantos quieres comprar? cantidad máxima disponible: " + c4MaxQty))
                    if (c4Qty <= c4MaxQty) {
                        priceList.push(c4Price * c4Qty)
                    }
                    else {
                        prompt("Opción no valida");
                        break;
                    }
                }
                else if (buyC4 == 2) {
                    break;
                }
                else {
                    prompt("Opción no valida");
                }
                break;
            case 5:
                let buyC5 = parseInt(prompt("Conjunto de anillos y accesorios por: " + c5Price + " los deseas agregar?. 1- Si - 2- No."));
                if (buyC5 == 1) {
                    let c5Qty = parseInt(prompt("Cuantos quieres comprar? cantidad máxima disponible: " + c5MaxQty))
                    if (c5Qty <= c5MaxQty) {
                        priceList.push(c5Price * c5Qty)
                    }
                    else {
                        prompt("Opción no valida");
                        break;
                    }
                }
                else if (buyC5 == 2) {
                    break;
                }
                else {
                    prompt("Opción no valida");
                }
                break;
            case 6:
                let optionalExit = parseInt(prompt("Deseas salir del catalogo?   1- Si. 2- No"));
                if (optionalExit == 1) {
                    optionToBuy = false;
                    break;
                }
                else {
                    break;
                }

            default:
                let exit = parseInt(prompt("Opción no válida. Por favor, elija 1 para regresar, o 2 para salir del catalogo"));
                if (exit == 2) {
                    optionToBuy = false;
                    break;
                }
                else if (exit == 1) {
                    break;
                }
        }
    }
    costCalc();
    alert("El costo total de tus artículos es: " + totalCost);
}





function costCalc() {
    totalCost = priceList.reduce((acc, price) => acc + price, 0);
}


