
const btnInicio = document.getElementById('inicio');
const player1 = document.getElementById('jugador1');
const player2 = document.getElementById('jugador2');
const player3 = document.getElementById('jugador3');

let pos1 = 0;
let pos2 = 0;
let pos3 = 0;


btnInicio.addEventListener('click', function (){
    
    btnInicio.style.display = 'none';
    let intervalo = setInterval(carrera,130);

    function carrera (){
        pos1 += Math.round( Math.random()*20 );
        player1.style.left =  `${pos1}px`; 

        pos2 += Math.round( Math.random()*20 );
        player2.style.left =  `${pos2}px`; 

        pos3 += Math.round( Math.random()*20 );
        player3.style.left =  `${pos3}px`; 

        if(pos1 >= 711){
            console.log('Ganó Rojo');
            clearInterval(intervalo)
        }else if(pos2 >= 711){
            console.log('Ganó Azul');
            clearInterval(intervalo)
        }else if(pos3 >= 711){
            console.log('Ganó Amarillo');
            clearInterval(intervalo)
        }

    }




})