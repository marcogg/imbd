async function bulbasur() {
    let url = "https://pokeapi.co/api/v2/pokemon/ditto"
        // Aqui necesitamos el await para que espera a que haya respuesta. Await solo funciona si afuera, la función está como async
    let response = await fetch(url)
    let json = await response.json()

}


// Async convierte una función síncrona a una asíncrona y permite esperar promesas y retornar una promesa

// EL Await nos ayuda a esperar la promesa
// Se pude usar async SIN await, pero no await sin async

async function sencilla() {
    return 89
}

// SI no pongo los paréntesis en sencillita, lo que hago es llamar a la declaración de la función, no el resultado

sencilla().then((value) => {
    console.log("El valor que retorna la promesa es " + value)
})


// También puedo guardar las func en variables
async function ejemplo() {
    let p = sencilla() //retorna una promesa como Objeto
        // si le pongo await, espera a que se retorne la promesa
    let p2 = await sencilla()
    console.log(p)
    console.log(p2)
}

ejemplo()