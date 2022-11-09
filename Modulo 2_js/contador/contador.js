let counter = 0

const value = document.getElementById('contador')
const button = document.getElementById('decrement')

// Incremento con event handler, se manejan dentro del HTML
// ahí es donde está llamada la función con el onclick
function increment() {

    counter++
    // Aqui inserto un valor al botón
    value.innerHTML = counter
}

// Contador de reversa con event listener
button.addEventListener('click', function() {
    if (counter > 0) {
        counter--
        value.innerHTML = counter

    }

})