// Captura de variables
const titulo = document.getElementById('paragraph')
const pantalla = document.getElementById('bigImage')
const contMiniaturas = document.getElementById('imgsContainer')

// e = pointer Event, y son enviados como parámetros, eso es la (e), identifica las propiedades de lo que hice click, si fue imagen, etc. Puede se rla letra e o whatever

contMiniaturas.addEventListener('click', function(e) {
    // aqui puedo ver en conosla la info que me arrojó el click sobre la miniatura, con esto nos ahorramos el capturar las 4 variables, con.target quiero buscar esa propiedad del evento
    console.log(e.target)

    // Aqui vamos a resolver que al hacer click en la fila con miniaturas hay un src none.
    // Evaluamos que exista un src en el evento, esto es equivalente a e.target.src == true
    if (e.target.src) {
        // Aqui sustituimos el src de la imagen por el que le di click
        pantalla.src = e.target.src
        titulo.textContent = e.target.name
    }
})