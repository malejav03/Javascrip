/**
 * Practica JavaScript utilizando matrices
 * 
 */

// variables globales +++++++++++++++++++++
var matriz = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
];

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//object.addEventListener("change", myScript);
window.onload = function () {
    document.getElementById('opciones').addEventListener('change', ejecutarOpcion);
};

function ejecutarOpcion() {
    let opcion = document.getElementById('opciones').value;
    borrarMatriz();
    switch (opcion) {
        case '1':
            mostrarMatriz();
            document.body.style.backgroundColor = "#8955";
            break;
        case '2':
            mostrarDiagonalPrincipal();
            break;
        case '3':
            mostrarDiagonalInversa();
            break;
        case '4':
            mostrarSuperiorDerecho();
            break;
        case '5':
            mostrarSuperiorIzquierda();
            break;
        case '6':
            mostrarInferiorIzquierdo();
            break;
        case '7':
            mostrarInferiorDerecho();
            break;
        case '8':
            generarMatriz();
            mostrarMatriz();
            console.log(matriz);
            break;

        default:
            break;
    }
    //alert('Hola..'+opcion);
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function borrarMatriz() {
    for (let f = 0; f < matriz.length; f++) {
        for (let c = 0; c < matriz.length; c++) {
            let ident = 'd-f' + f + 'c' + c;
            document.getElementById(ident).innerText = '';
        }
    }
}

function generarMatriz() {
    for (let f = 0; f < matriz.length; f++) {
        for (let c = 0; c < matriz.length; c++) {
            matriz[f][c] = generarAleatorio(10, 100);
        }
    }
}

/**
 * muestra los numeros de la matriz en la caja 
 */
function mostrarMatriz() {
    for (let f = 0; f < matriz.length; f++) {
        for (let c = 0; c < matriz.length; c++) {
            let ident = 'i-f' + f + 'c' + c;
            console.log(ident);
            document.getElementById(ident).innerText = matriz[f][c]
            //matriz[f][c]
        }
    }
}
function mostrarDiagonalPrincipal() {
    for (let f = 0; f < matriz.length; f++) {
        let ident = 'd-f' + f + 'c' + f;
        let numero = matriz[f][f];
        document.getElementById(ident).innerText = numero;
    }
}
function mostrarDiagonalInversa() {
    for (let f = 0; f < matriz.length; f++) {
        let = c = matriz.length - 1 - f;
        let ident = 'd-f' + f + 'c' + c;
        let numero = matriz[f][4 - f];
        document.getElementById(ident).innerText = numero;
    }
}
function mostrarSuperiorIzquierda() {
    for (let f = 0; f < matriz.length; f++) {
        for (let c = 0; c < matriz.length- f; c++) {
            let ident = 'd-f' + f + 'c' + c;
            document.getElementById(ident).innerText = matriz[f][c]
            //matriz[f][c]
        }
    }
}
function mostrarSuperiorDerecho() {
    for (let f = 0; f < matriz.length; f++) {
        for (let c = f; c < matriz.length; c++) {
            let ident = 'd-f' + f + 'c' + c;
            document.getElementById(ident).innerText = matriz[f][c]
            //matriz[f][c]
        }
    }
}
function mostrarInferiorDerecho() {
    for (let f = 0; f < matriz.length; f++) {
        for (let c = 4-f; c < matriz.length; c++) {
            let ident = 'd-f' + f + 'c' + c;
            document.getElementById(ident).innerText = matriz[f][c]
            //matriz[f][c]
        }
    }
}
function mostrarInferiorIzquierdo() {
    for (let f = 0; f < matriz.length; f++) {
        for (let c = 0; c <= f; c++) {
            let ident = 'd-f' + f + 'c' + c;
            document.getElementById(ident).innerText = matriz[f][c]
            //matriz[f][c]
        }
    }
}
/**
 * Genera un numero entero aleatorio
 * entre min y max
 * @param {int} min valor minimo a generar 
 * @param {int} max valor maximo a generar 
 */
function generarAleatorio(min, max) {
    let numero = Math.round(Math.random() * (max - min)) + min;
    return numero;

}

generarMatriz();