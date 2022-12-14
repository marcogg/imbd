function presentacion(nombre, apellido, callback) {
    return callback(`Hola ${nombre} de apellido ${apellido}`)
}

function soy(txt) {
    return `Me presento ${txt}`
}
let texto = presentacion('Marco', 'Garcia', soy)
console.log(texto);