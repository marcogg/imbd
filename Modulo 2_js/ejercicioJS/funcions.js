let cantidadTomate = 3;
let cantidadFrijol = 0.5;
let cantidadAguacate = 2;
let cantidadCebolla = 0.25;
let cantidadChile = 0.25;

let precioTomate = 16.67;
let precioFrijol = 26.65;
let precioAguacate = 17.00;
let precioCebolla = 18.90;
let precioChile = 11.87;

let totalTomate = cantidadTomate * precioTomate;
let totalFrijol = cantidadFrijol * precioFrijol;
let totalAguacate = cantidadAguacate * precioAguacate;
let totalCebolla = cantidadCebolla * precioCebolla;
let totalChile = cantidadChile * precioChile;

let subtotal = totalTomate + totalFrijol + totalAguacate + totalCebolla + totalChile;
let iva = 1.16;
let total = subtotal * iva;

console.log(`Total de la cuenta: ${subtotal}`);
console.log(`Subtotal más 16% de IVA: ${total}`);