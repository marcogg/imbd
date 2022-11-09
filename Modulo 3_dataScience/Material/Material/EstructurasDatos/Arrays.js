const array = [1, 6, 4, 9, 5, 2, 8, 3, 7];
// const array1 = [1,2,3]
// const array2 = [4,5,6]
// let result
//
// Ingresar nuevo elemento al final del arreglo
// array.push(999)
// console.log(array)
//
// Eliminar el último elemento de un arreglo y también lo retorna
// array.pop()
// console.log(array)
//
// Recorre el arreglo
// array.forEach(el=>console.log(el))
//
// Recorre el arreglo y retorna una copia pudiendo ser afectada por la función que se le pase como parámetro (no afecta el arreglo original)
// result = array.map(el=>el*2)
// console.log(result)
//
// Recorre y filtra el arreglo, retornando un nuevo arreglo con solo los elementos que cumplan cierta condición. (no afecta el arreglo original)
// result = array.filter(el => el%2!==0)
// console.log(result)
//
// Recorre el arreglo y retorna el primer valor que cumpla la condición dada
// result = array.find(el => el%2===0)
// console.log(result)
//
// Retorna el índice en que se encuentra el valor dado
// result = array.indexOf(9);
// console.log(result)
//
// Concatena o une dos arrays, ya sea definidos antes o pasado como parámetro.
// result = array1.concat([7,8,9])
// console.log(result)
//
// Verifica si todos los elementos de un arreglo cumplen alguna condición, retorna un boolean
// result = array.every(el=>el>0)
// console.log(result)
//
// Verifica si alguno o algunos de los elementos de un arreglo cumplen alguna condición, retorna un boolean
// result = array.some(el=>el>2)
// console.log(result)
//
// Verifica si el arreglo incluye el valor dado, retorna un boolean
// result = array.includes(2)
// console.log(result)
//
// Transforma los elementos de un arreglo en un string separándolos por medio de lo que se pase por parámetro.
// result = array.join('/')
// console.log(result)
//
// Reduce un arreglo a un solo valor que termina por retornarse
// result = array.reduce((acc, el) => acc + el, 0)
// console.log(result)
//
// Rellena un arreglo con el valor dado en el parámetro 1, desde la posición del parámetro 2 y hasta antes del valor del parámetro 3 afectando el arreglo original
// result = array.fill(0,2,5)
// result = array.fill(0,2)
// result = array.fill(0)
// console.log(result)
// console.log(array)
//
// Eliminar el primer elemento de un arreglo
// array.shift()
// console.log(array)
//
// Ingresar nuevo elemento al inicio del arreglo
// array.unshift(1,2)
// console.log(array)
//
// Retorna una porción del arreglo desde la posición del parámetro 1 hasta antes de la posición del parámetro 2 (no afecta el arreglo original)
// result = array.slice(2)
// console.log(result)
//
// Permite eliminar de un array el número de elementos indicados en el parámetro 2 desde la posición del parámetro 1 y/o ingresar nuevos elementos desde la posición del parámetro 1 ( modifica el arreglo original y retorna los elementos eliminados)
// result = array.splice(2, 3 , 'a', 'b')
// console.log(result)
// console.log(array)

// Invierte el orden de los elementos de un array. (cambia el arreglo original)
// console.log(array)
// let result = array.reverse()
// console.log(array)
//
// Permite ordenar un arreglo siguiendo estas premisas segur el retorno de la función
// si retorna algo menor a 0 a se pone antes que b
// si retorna algo mayor que 0 b se pone antes que a
// si retorna 0 no se hace ningún cambio
// result = array.sort((a,b)=> b - a)
// console.log(result)