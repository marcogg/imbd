// Tres manera de declarar functions

// function declared

function elevarPotenciaDeclared(n, p) {

}


// Function as a value


// sumar los valores inernos de un array

const numbers = [1, 2, 3, 4, 5];


// dentro de mi función, no existe numbers, existe arr, porque es un placeholder un parámetro, justo para poder reciclar
// los parametros son los espacios de memoria que se reservan para el valor real que se va a procesar

// Paso 1: guardamos en un const nuestra arrow function, que tendrá como parámetro arr

const sumArray = (arr) => {
    // Paso 2: hacemos la cajita donde guardaremos el resultado
    let suma = 0
        // establecemos el ciclo
    for (let i = 0; i < arr.length; i++) {
        // Actualizamos el valor de la cajita con el resultado del ciclo
        suma += arr[i]
    }
    // Guardamos en una tipo de variable para reciclar
    return suma
}

console.log(sumArray(numbers))