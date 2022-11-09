// Las classes son una plantilla para agrupar código y PerformanceMeasure, el constructor es una función pero como ninguna función dentro de clases lleva la palabra function no está
class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

    comer() {
        return `Soy ${this.nombre} y estoy comiendo`
    }

    caminar() {
        return `Sou un ${this.tipo}, tengo ${this.edad} años y estoy caminando`
    }

}

const bruce = new Animal('perro', 'Bruce', 1)
const garfield = new Animal('gato', 'Garfield', 6)

console.log(bruce.comer())


// CALCULAR AREAS DE POLIGONOS
class Poligono {
    constructor(base, altura) {
        this.base = base
        this.altura = altura
    }

    calcularArea() {
        return this.base * this.altura
    }


}

// Los new, se usan cuando tenemso un constructor
const cuadrado = new Poligono(5, 5)
const rectangulo = new Poligono(3, 9)
const triangulo = new Poligono(3, 3)

// Aplicando el polimorfismo para calcular el área dle triangulo como se debe, tomando como base lo que ya tengo pero adpatnadolo a la formula de calculo del trinagulo
triangulo.calcularArea = function() {
    return (this.base * this.altura) / 2
}
console.log(triangulo.calcularArea())