const pantalla = document.querySelector('#image')
const botones = document.querySelector('#buttons')
const titulo = document.querySelector('#title')
const parrafo = document.querySelector('#paragraph')

botones.addEventListener('click', function(e) {
    console.log(e.target)
        // Con un for each vamos a iterar los valores de la DB con una arrow function que es anónima y con parámetro flor

    flores.forEach(flor => {
        // En este IF verificamos que el click que hago corresponda a la info que tiene la DB
        if (flor.idFlor == e.target.textContent) {
            console.log(flor)
            pantalla.src = flor.imagen
            titulo.textContent = flor.titulo
            parrafo.textContent = flor.descripcion
        }

    })
})

// El hoiting es un comportamiento en el que las variables de JS se van en automático hasta arriba