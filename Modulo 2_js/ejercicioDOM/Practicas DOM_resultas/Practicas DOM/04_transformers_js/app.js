
//01. Primero: Captura de variables

const formBusqueda = document.querySelector('#form-busqueda');
const inputName = document.querySelector('#inputName');
const inputModel = document.querySelector('#inputModel');
const inputMovie = document.querySelector('#inputMovie');
const boxTransformers = document.querySelector('#box-transformers');

//05. Quinto: Generar un objeto con la selección de la búsqueda para comparar con objeto de base de datos

const datosBusqueda = {
    nombre: '',
    modelo: '',
    peliculaId: '',
}


//02. Segundo: Crear el evento para mostrar información cuando se cargue la página.
document.addEventListener('DOMContentLoaded', () => {
    mostrarHTML(transformers)
});


//04. Cuarto: Se crea el evento de envío del formulario. Aquí se hace el filtro.
formBusqueda.addEventListener('submit', (e) => {
    e.preventDefault();

        //06. Sexto. Se asignan los datos de input a datos de busqueda
        datosBusqueda.nombre = inputName.value.toLowerCase();
        datosBusqueda.modelo = inputModel.value;
        datosBusqueda.peliculaId = inputMovie.value;

        console.log(datosBusqueda);

        filtrarTransformers(); //Se Hace el llamado a la función, se debe crear en el siguiente paso

        formBusqueda.reset(); //Hace referencia a todo el formulario resetea todos los inputs.
});



//07. Septimo: Se crea funcion para filtrar transformers

function filtrarTransformers (){
    //Se pasa función dentro del filter, es como sacar la función con todo y parámetro interno
    const resultado = transformers.filter( filtrarName ).filter( filtrarModelo ).filter( filtrarMovie );

    //11. trabajar cuando no haya resultados después del filter
   
            if(resultado.length){
                mostrarHTML(resultado)
            } else{
                sinResultado();
            }

            // Object.values() obtiene los valores del objecto en cuestión.*
            // Trabajar Cuando se envíe el formulario y no hayan opciones seleccionadas.
            const hayContenido = Object.values(datosBusqueda).filter( (e) => e );


            if(hayContenido.length){
                mostrarHTML(resultado)
            } else{
                sinResultado();
            }

    //console.log(resultado)
    //mostrarHTML(resultado)
}

//12. Crear funcion sin resultado
function sinResultado (){

    limpiarHTML();

    const sinResultado = document.createElement('div');
    sinResultado.classList.add('bg-danger','text-white','border-danger','p-4','text-center');
    sinResultado.textContent = 'No hay resultados';
    boxTransformers.parentElement.appendChild(sinResultado);

}


//08. Octavo: Generar las funciones que va a recibir filter
function filtrarName(transformer) { //El argumento ya es enviado desde el filter
    const { nombre } = datosBusqueda;

    if (nombre) {
        return transformer.nombre == nombre;   //regresa coincidencias
    }

    return transformer; //Si no existen datos en nombre se regresa el array completo.
}

function filtrarModelo(transformer) {
    const { modelo } = datosBusqueda;

    if (modelo) {
        return transformer.modelo == modelo;
    }

    return transformer;
}

function filtrarMovie(transformer) {
    const { peliculaId } = datosBusqueda;

    if (peliculaId) {
        return transformer.peliculaId == peliculaId;
    }

    return transformer;
}

//09. Generar función limpiar y agregar a mostrarHTML
function limpiarHTML(){
    while(boxTransformers.firstChild){
        boxTransformers.firstChild.remove();
    }
}


//03. Tercero: Crear Función, Recorrer el array de objetos y mostrar el HTML

function mostrarHTML(transformers){

    //10. agregar función limpiar a mostrarHTML
    limpiarHTML();

    //console.log(transformers);

    transformers.forEach( transformer => {
        const {nombre, modelo, peliculaName, descripcion, image} = transformer;

        const cardTransformer = document.createElement('div');
        cardTransformer.classList.add('col', 'mb-3','d-flex');
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
            </div>
        `;

        boxTransformers.appendChild(cardTransformer);
    });

    
}


