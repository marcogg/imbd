
const titulo = document.getElementById('paragraph');
const pantalla = document.getElementById('bigImage');
const contMiniaturas = document.getElementById('imgsContainer');

contMiniaturas.addEventListener('click', function (e){
    console.log(e.target);

    if(e.target.src){
        pantalla.src = e.target.src;
        titulo.textContent = e.target.name;
    }
    

});