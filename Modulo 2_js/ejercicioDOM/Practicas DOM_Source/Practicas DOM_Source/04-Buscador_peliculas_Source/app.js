// Selecciono todo el form para poder escuchar el evento submit
const formBusqueda = document.querySelector('#form-busqueda')
const inputName = document.querySelector('#inputName')
const inputModel = document.querySelector('#inputModel')
const inputMovie = document.querySelector('#inputMovie')
const boxTransformers = document.querySelector('#box-transformers')

// Este objeto nos va a yudar a comparar los resultados de la búsqueda
const datosBusqueda = {
    nombre: '',
    modelo: '',
    pelicula: ''
}

// Cuando el arbol del DOM esté cargado, vamos a correr esta función
document.addEventListener('DOMContentLoaded', () => {
    // Aqui pedimos como parámetro el array de objetos de db.js
    mostrarHTML(transformers)

})

// Aqui le pasamos el parámetro

function mostrarHTML(transformers) {
    transformers.forEach((transformer) => {
        // Aqui con destructing creamos variables de cada valor, el orden es indistinto, siempre nos jala la data que se llama 
        const { nombre, modelo, peliculaName, descripcion, image } = transformers

        // Esto es old school, acceder a las propiedades por  Destructuring, sin hacer variable
        // console.log(transformer.nombre)
        // console.log(transformer.modelo)

        // O mejor, con destructuring
        // console.log(descripcion)

        // Aqui vamos a crear dinámicamente el elemento de la card
        const cardTransformer = document.createElement('div')
        cardTransformer.classList.add('col', 'mb-3')
        cardTransformer.innerHTML = `
        <div class="card bg-secondary flex-row rounded-3">
                        <div class="w-50">
                            <img src="${image}" class="img-fluid object-fit" alt="">
                        </div>
                        <div class="card-body w-50">
                            <h5 class="card-title"></h5>
                            <h2 class="card-text mb-0 text-capitalize"><span>${nombre}</span>.</h2>
                            <p class="card-text mb-3 text-capitalize"><span>${modelo}</span>.</p>
                            <p class="card-text mb-3 text-capitalize"><b>Primera Aparición:</b> <span>${peliculaName}</span>.</p>
                            <p class="card-text mb-0"><b>Descripción:</b><br> <span>${descripcion}</span></p>
                        </div>
                    </div>`
            // Aqui agregamos cada HTML generado por iteración 
        boxTransformers.appendChild(cardTransformer)

    });

}

// Crear el evento de envio del formulario. Aqui se hace el filtro
// Al mandar un Submit, pro defecto se borra la información, para prevenirlo usamos event default
formBusqueda.addEventListener('submit', (e) => {
    e.preventDefault();

    datosBusqueda.nombre = inputName.value.toLowerCase()
    datosBusqueda.modelo = inputModel.value
    datosBusqueda.pelicula = inputMovie.value

    // Aqui limpiamos los inputs
    formBusqueda.reset()
})