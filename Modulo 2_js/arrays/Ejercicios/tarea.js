// 1. Desarrolla un método para verificar si una palabra es un palíndromo. Casos de prueba: var word1 = 'madam' var word2 = 'computadora'


// Primero dividimos la palabra por letras. Guardamos el output en spell y este en una variable
// Le avisamos que pasaremos el parámetro word
// Guardamos el resultado del Array en un let spell
// Establecemos que devuelva el resultado y lo guarde con el return
const palindromoOriginal = (word) => {
    let spell = word.split('')
    return spell

}

// En este bloque le pasamos la palabra ya en Array para que la voltee y guardamos resultado en spellReverse
const palindromoReverse = (word) => {
    let spellReverse = word.reverse()
    return spellReverse
}

// Aquí evaluamos que cada letra esté en posición y correponda con el volteado
const evaluation = (wordOriginal, wordReverse) => {
    for (i = 0; i < wordOriginal.length; i++) {
        if (wordOriginal[i] == wordReverse[i]) {
            let palindromoTrue = console.log('Si, es palindromo')
            return palindromoTrue
        } else {
            let palindromoFalse = console.log('No, no es palindromo :(')
            return palindromoFalse
        }
    }
}

// WRITE HERE YOUR WORD
let wordToEvaluate = 'yo soy'

// To lowercase
let sanitizedWord = wordToEvaluate.toLowerCase()

// Just for control: Word Array
console.log(palindromoOriginal(sanitizedWord))

// Just for control: Word array backwards
console.log(palindromoReverse(palindromoOriginal(sanitizedWord)))

// Print in console result
console.log(evaluation(palindromoOriginal(sanitizedWord), palindromoReverse(palindromoOriginal(sanitizedWord))))




// 2. Escribe un método que retorne el elemento mayor del arreglo dado: arr = [45, 56, 32, 98, 1000, 5, 23]

// const numbers = [45, 56, 32, 98, 1000, 5, 23]

// const evaluateNumbers = (arr) => {

//     let maxNumber = Math.max(arr)
//     return maxNumber

// }

// console.log(evaluateNumbers(numbers))


// 3.Crea un programa, el cual sirva para convertir temperaturas. De Celsius a Fahrenheit y viceversa. Utiliza las expresiones matemáticas necesarias para la conversión. Que dicho programa reciba como argumentos las temperaturas y regresa el resultado imprimiendo en pantalla la conversión. Tu solución es libre a la imaginación.

// De Celsius a Fahrenheit  ºF = ºC x 1.8 + 32

const toFahrenheit = tempCelsius => {
    let conversionToFahrenheit = `Temperatura en °F: ${tempCelsius * 1.8 +32}`
    return conversionToFahrenheit
}


// De Fahrenheit a Celsius ºC = (ºF-32) ÷ 1.8.

const toCelsius = tempFahrenheit => {
    let minus32 = tempFahrenheit - 32
    let conversionToCelsius = `Temperatura en °C: ${minus32 / 1.8}`
    return conversionToCelsius
}

// Your temp in Fahrenhiiet here
let fromFahrenheitToCelsius = 200

// Your temp in Celsius here
let fromCelsiusToFahrenheit = 40

console.log(toFahrenheit(fromCelsiusToFahrenheit))
console.log(toCelsius(fromFahrenheitToCelsius))