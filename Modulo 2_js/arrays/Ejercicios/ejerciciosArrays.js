// Arreglos
var frutas = ["manzana", "pera", "ciruela"];
console.log(frutas.length);


// Hacer una tabla del 8 con for

let i = 1

for (i = 1; i <= 10; i++) {
    console.log(`8 x ${i} = ${8*i}`);
}


// Ejercicios arreglos

var verduras = [] //array vacio
var frutasYverduras = ['papa', 'pepino', 'manzana', 'pera'];

let position = frutasYverduras[2]

console.log(position)

// Sobreescribiendo un array

let dias = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
console.log(dias[2] = "Tu mama");

console.log(dias);

// Añadiendo elementos
dias.push('Enero');

console.log(dias)

// unshift agrega un elemento al inicio de la lista
dias.unshift('String al inicio del array')
console.log(dias)

// shift elimina un elemento del array, sin reemplazar nada
dias.shift('String al inicio del array')
console.log(dias)

// slice: divide los arrays estableciendo una posición de inicio o inicio y final
dias.slice(2)
console.log(` slice: ${dias}`)

// reverse: cambia el orden al revés del array
// sort: devuelve los datos ordenados según unicode.... sepa la goma

let num = [1, 2, 3, 4, 5, 9, 10, 11, 23, 42, 55]
console.log(num.sort())

// concat: une dos arreglos sin modificar los originales
// join: convertir de un array en un solo string 
console.log(num.join());

// indexof: retorna el primer index donde un elemento dado puede ser encontrado en el array, es decir, dice la posición de un dato que esté buscando. 
console.log(dias.indexOf('Enero'));


// Recorriendo arrays con un FOR
for (i = 0; i <= dias.length; i++) {
    console.log(`Posición ${i} : ${dias[i]}`);
}