console.log("1")

setTimeout(() => {
    console.log("2")
}, 200);

for (let i = 0; i < 100; i++) {
    console.log(i)
}

console.log("fin?")

// En este ejemplo, se lleva a cabo todo lo síncrono, un for, es síncrono, por eso se ejecuta todo en pila