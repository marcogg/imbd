// [1,2,2,3,5,6,7,9,12,12,13,14,16,30,33,35,40,42,65,66,66,88,89] -> Buscaremos el numero 66
function busquedaSecuencial(setDatos, numeroABuscar) {
    for (let i = 0; i < setDatos.length; i++) {
        if (setDatos[i] === numeroABuscar) {
            return `Encontre el numero en ${i+1} pasos`
        }
    }
    return 'Numero no encontrado'
}

function busquedaBinaria(setDatos, numeroABuscar) {
    let first = 0;
    let last = setDatos.length - 1;
    let position = -1;
    let isFound = false;
    let middle;
    let steps = 0;

    while (isFound === false && first <= last) {
        steps++;
        middle = Math.floor((first + last) / 2)
        if (setDatos[middle] === numeroABuscar) {
            isFound = true
            position = middle
        } else if (setDatos[middle] > numeroABuscar) {
            last = middle - 1
        } else {
            first = middle + 1
        }
    }

    return [position, steps]
}