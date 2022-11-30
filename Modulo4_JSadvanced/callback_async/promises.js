// Aquí con funciones callback le digo a la promesa que hacer si se cumple la promesa o si no se cumple, con reject

// let promesaDeMiEx = new Promise((resolve, reject) => {
//     let isTuesday = true
//     if (isTuesday) {
//         resolve()
//     } else {
//         reject()
//     }
// })


// Aqui le decimos a la promesa qué va a hacer después
// promesaDeMiEx.then(function() {
//     console.log('Yei! se ejecutó')
// }, function() {
//     console.log('Ups, no se ejecutó')
// })


// También podemos declararlo así, para que queden sepradas

// promesaDeMiEx.then(function() {
//     console.log('Si te quiere')
// }, exToxico)

// function exToxico() {
//     console.log("No te quiere")
// }


// fetch, es una función para pedir datos a servidores
// una promesa, es crear una condición para resolverla o rechazarla
// async await, es una tipo de función que espera promesas y retorna una promesa



//PROMISES
const aplicarDescuento = new Promise((resolve, reject) => {

    const subtotal = 10001;

    if (subtotal > 10000) {
        resolve('Descuento Aplicado');
    } else {
        reject('No se pudo Aplicar');
    }

});

aplicarDescuento
    .then(resultado => {
        subtotal(resultado);
    })
    .catch(error => {
        subtotal(error);
    });

// Hay 3 valores posibles...
// Fulfilled - El promise se cumplió
// Rejected - El promise no se cumplió
// Pending - No se ha cumpludo y tampoco fue rechazado

function subtotal(mensaje) {
    console.log(mensaje);
}