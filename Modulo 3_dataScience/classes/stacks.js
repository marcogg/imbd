class Stack {
    constructor() {
        this.stack = []
    }

    push(element) {
        this.stack.push(element)
        return this.stack
    }

    pop() {
        // Aqui  hacemo directo el return porque como estamos eliminando, pues es algo que ya no vamos a guardar
        return this.stack.pop()
    }

    peek() {
        return this.stack(this.stack.length - 1)
    }

    size() {
        return this.stack.length
    }

    print() {
        console.log(this.stack)
    }

    isEmpty() {
        return this.stack.length === 0
    }

    clear() {
        this.stack = []
    }
}