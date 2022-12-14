console.log('1')

// Set time put es asíncrono, es por lo tanto un tipo de WEB API
setTimeout(() => {
    console.log('2')
}, 3000)

console.log("Fin?")

setTimeout(() => {
    console.log('3')
}, 0)


// En resumen, el engine de JS, primero irá apilando y resolviendo en el mismo paso las funcines síncronas. Después, irá a la pila de asíncronas y preguntará cual ya está resuelta y hacerla.