// HAcer una clase para definir las patas y pulgas que tiene

// Creamos la clase, pasando como parámetro legs
class Animal {
    constructor(legs) {
        this.brain = true
        this.legs = legs
    }
}

const humano = new Animal(2)

const mascota = new Animal(4)


// Aplicando polimorfismo para la instancia de mascota, para no tener que rehacer lo que ya hicimos
// Definimos por defecto que las mascotas no van a tener fleas
mascota.fleas = 0

// Ahora que ya tenemos nuestro templata, podemos crear un nuevo objeto, como perro. Entre parénteses ponemos cual va a ser el objeto del que vamos a crear esta nueva instancia
let perro = Object.create(mascota)

console.log(perro.legs)

// NOTA: La cadena de prototipos ayuda a que si hay una propiedad de mi objeto que no esté definida a ese NavigationPreloadManager, va buscando hacia arriba hasta que la encuentra