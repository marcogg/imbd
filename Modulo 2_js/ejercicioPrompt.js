let nombre = prompt('Hola! Cuál es tu nombre ?').toLowerCase();
let edad = prompt('Cuál es tu edad? ');
if (edad >= 18) {
    if (nombre == 'mario' || nombre == 'carlos') {
        alert(`${nombre} Pásale al perreo VIP`);
    } else {
        alert(`Bienvenido ${nombre}, puedes perrear intenso con toda la raza.`);
    }
} else {
    alert(`Uyyyy ${nombre}, tienes apenas ${edad} años, no cuentas con la edad suficiente pal perreo intenso`);
}

let n = 1;

while (n <= 10) {
    console.log(`5 x ${n} = ${n*5}`)
    n++
}