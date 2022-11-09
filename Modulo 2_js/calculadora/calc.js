let getNumber0 = document.getElementById('num0')
let getNumber1 = document.getElementById('num1')
let getNumber2 = document.getElementById('num2')
let getNumber3 = document.getElementById('num3')
let getNumber4 = document.getElementById('num4')
let getNumber5 = document.getElementById('num5')
let getNumber6 = document.getElementById('num6')
let getNumber7 = document.getElementById('num7')
let getNumber8 = document.getElementById('num8')
let getNumber9 = document.getElementById('num9')

let write0 = getNumber0.innerHTML = 0
let write1 = getNumber0.innerHTML = 1
let write2 = getNumber0.innerHTML = 2
let write3 = getNumber0.innerHTML = 3
let write4 = getNumber0.innerHTML = 4
let write5 = getNumber0.innerHTML = 5
let write6 = getNumber0.innerHTML = 6
let write7 = getNumber0.innerHTML = 7
let write8 = getNumber0.innerHTML = 8
let write9 = getNumber0.innerHTML = 9

// let plus = +
//     let minus = -
//         let division /
//             let mulitplication *

let numbersArr = []


// function printHistory(number) {
//     for (number = 0; number.length; number++) {
//         document.getElementById('history').innerHTML = ` ${number} `
//     }

// }

const printHistory = (numbers) => {
    numbersArr.push(numbers)
    console.log
    return document.getElementById('history').innerHTML = numbersArr

}