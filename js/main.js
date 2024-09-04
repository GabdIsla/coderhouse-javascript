
// Variables
let objetosElegidos = 0;
let objetosTotales = 0;
let totalValue = 0;

let activeBuying = false;

// Array
let listaDePrecios = [];

// Functions

let optionToBuy = parseInt(prompt("Elija alguna de las siguientes opciones: 1- Continuar a tienda. 2- Salir"))

if (optionToBuy == 1) {
    activeBuying = true;
    clientPurchasing();
}


function costCalc() {
    let costoTotal = 0;
    for (let i = 0; i <= listaDePrecios.length; i++) {
        costoTotal += listaDePrecios[i];        
    }
    return costoTotal;
}

function clientPurchasing() {
    while (activeBuying) {
        let optionToBuy = parseInt(prompt("Elija alguna de las siguientes opciones: 1- Continuar a catalogo. 2- Salir"))
        if (optionToBuy == 1) {
            let catalogo = parseInt(prompt("Tenemos 5 articulos para mostrarte, ¿Cual quieres ver primero? Escribe un numero del 1 al 5"))
            switch (catalogo) {
                case 1:
                    let buyC1 = parseInt(prompt("Camisa deportiva por $1,400.00, la deseas agregar?. 1- Si - 2- No."));
                    if (buyC1 == 1) {
                        listaDePrecios.push(1400);
                    }
                    else {
                        break;
                    }
                case 2:
                    let buyC2 = parseInt(prompt("Camisa formal por $900.00, la deseas agregar?. 1- Si - 2- No."));
                    if (buyC2 == 1) {
                        listaDePrecios.push(900);
                    }
                    else {
                        break;
                    }
                case 3:
                    let buyC3 = parseInt(prompt("Tenis deportivos por $1,200.00, los deseas agregar?. 1- Si. 2- No."));
                    if (buyC3 == 1) {
                        listaDePrecios.push(1200);
                    }
                    else {
                        break;
                    }
                case 4:
                    let buyC4 = parseInt(prompt("Tenis deportivos por $1,000.00, los deseas agregar?. 1- Si. 2- No."));
                    if (buyC4 == 1) {
                        listaDePrecios.push(1000);
                    }
                    else {
                        break;
                    }
                case 5:
                    let buyC5 = parseInt(prompt("Tenis deportivos por $500.00, los deseas agregar?. 1- Si. 2- No."));
                    if (buyC5 == 1) {
                        listaDePrecios.push(500);
                    }
                    else {
                        break;
                    }
            }
            
        }
        else{
            totalValue = costCalc();
            console.log("El costo total de tus articulos es: " + totalValue)
            break;
        }
    }
}