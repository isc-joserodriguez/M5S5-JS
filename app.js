let fin = false;
let suma = 0;
let pizza = 0;
let refresco = 0;

while (fin == false) {
    let index = Number(window.prompt(`
        Elige un producto
        1.- Pizza básica, con un precio de 5 USD por cada una.
        2.- Pizza con 2 ingredientes, con un precio de 10 USD por cada una.
        3.- Pizza con 3 ingredientes, con un precio de 12 USD por cada una.
        4.- Refresco chico, con un precio de 2 USD.
        5.- Refresco grande, con un precio de 3 USD.
  `));

    if ((index == 1 || index == 2 || index == 3) && index > pizza) { //Significa que compró una pizza
        pizza = index;
    }
    if ((index == 4 || index == 5) && index > refresco) { //Significa que compró una pizza
        refresco = index;
    }
    switch (index) {
        case 1:
            suma = suma + 5;
            break;
        case 2:
            suma = suma + 10;
            break;
        case 3:
            suma = suma + 12;
            break;
        case 4:
            suma = suma + 2;
            break;
        case 5:
            suma = suma + 3;
            break;
    }

    fin = window.prompt(`¿Quiere agregar un nuevo producto?`) === 's' ? false : true;
}
if (pizza = 1 && refresco == 4) {
    console.log('El total es: ' + (suma * .9));
}else if (pizza = 2 && refresco == 4) {
    console.log('El total es: ' + (suma * .85));
}else if (pizza = 3 && refresco == 5) {
    console.log('El total es: ' + (suma * .8));
}