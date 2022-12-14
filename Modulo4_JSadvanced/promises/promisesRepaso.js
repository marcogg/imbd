// Creando una promesa... es más bien usado en backend
let x = 10
const promesa = new Promise((resolve, reject) => {
    if ((x = 10)) {
        resolve("Aquí están tus datos")
    }
    reject("NO tengo datos disponibles")
})

console.log(promesa)

// como una promesa es una instancia de un objeto (el objeto Promisa), tengo métodos, then y catch

// Consumiendo promesas
promesa
    .then((response) => {
        console.log(response)
    })

// Aqui lo interesante es que puedo encadenar funciones, en forma vertical, y evitar un callback Hell, donde son callbacks en cascada que lo hacen terriblemente ilegible

// Aqui puedo hacer algo que ya no tenga nada que ver, pero está encadenado al primer then
.then(() => {
    console.log("Tu mamá tiene: ", 50)
    return 50
})

// Y puedo acceder solo a los resultados de functions inmediatos, si pongo return, como en la linea 25 y pasarlo como parámetro a la siguiente funcion
.then((resultadoAnosMama) => {
    console.log(resultadoAnosMama * 2, response)
})


// Lo que sí, solo puedo tener un catch, al finally, solo habría un error y aquí se maneja
.catch((error) => {
    console.log(error)
})