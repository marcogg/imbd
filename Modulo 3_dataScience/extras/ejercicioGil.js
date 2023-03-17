//Función con código extenso
​
// const reverse = (string) => {
//
//   const words = string.split(' ');
//
//   const result = words.map((word) => {
//
//     const currentWord = word.split('')
//
//     if (currentWord.length > 4) {
//       return currentWord.reverse().join('');
//     } else {
//       return word
//     }
//   })
//
//   return result.join(' ');
// }
​​
//Función con código reducido utilizando ternario
​
// const reverse = (string) => {
//
//   const words = string.split(' ');
//
//   const result = words.map((word) => {
//     return word.split('').length > 4 ? word.split('').reverse().join('') : word;
//   })
//
//     return result.join(' ');
// }
​​
// Función segmentada en multiples funciones
​​
const split = (string) => {
    return string.split(' ')
}​
const reverse = (word) => {
    return word.split('').reverse().join('')
}​
const sizeWord = (word, size) => {
    return word.split('').length > size
}​
const reverseWord = (string) => {​
        const words = split(string);​
        const result = words.map((word) => {
            return sizeWord(word, 6) ? reverse(word) : word;
        })​
        return result.join(' ');
    }​​
    //Función con código reducido al máximo
    ​
    // const reverse = (string) => {
    //   return string.split(' ').map((word) => {
    //     return word.split('').length > 4 ? word.split('').reverse().join('') : word;
    //   }).join(' ');
    // }
    ​​
console.log(reverse('The quick brown fox jumps over the lazy dog.'));