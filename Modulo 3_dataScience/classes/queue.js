class Queue {
    constructor() {
        this.queue = []
    }

    enqueue(element) {
        this.queue.push(element)
        return this.queue
    }

    dequeue() {
        // Aqui  hacemo directo el return porque como estamos eliminando, pues es algo que ya no vamos a guardar, camiamos a shift porque queremos eliminar el primero dela filq
        return this.queue.shift()
    }

    peek() {
        return this.queue[0]
    }

    size() {
        return this.queue.length
    }

    print() {
        console.log(this.queue)
    }

    isEmpty() {
        return this.queue.length === 0
    }

    front() {
        return this.queue[0]
    }

    back() {
        return this.queue[this.queue.length - 1]
    }

    clear() {
        this.queue = []
    }
}