

const pantalla = document.querySelector('#image');
const botones = document.querySelector('#buttons');
const titulo = document.querySelector('#title');
const parrafo = document.querySelector('#paragraph');


botones.addEventListener('click', function (e) {
    console.log('click a boton ', e.target.textContent);

    flores.forEach( flor => {

       /*  console.log('Id Flor: ',flor.idFlor) */
        
        if(flor.idFlor == e.target.textContent){
            pantalla.src = flor.imagen; 
            titulo.textContent = flor.titulo; 
            parrafo.textContent = flor.descripcion;
        }

    } )

})
