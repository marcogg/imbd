class Node {
    constructor(datum) {
        this.datum = datum;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Metodo de ayuda que nos va a permitir crear un nuevo nodo para insertar
    insert(datum) {
        // Creamos un nodo y lo inicializamos con el dato recibido
        let newNode = new Node(datum);
        // Si la raiz es nula entonces le agregaremos el nodo y este nodo sera la raiz
        if (this.root === null) {
            this.root = newNode
                // Si no, tenemos que encontrar la posicion correcta y agregar el nodo
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    // Metodo que inserta un nodo en el arbol, se va a mover recursivamente sobre el arbol para buscar la ubicación correcta para meter el nodo
    insertNode(node, newNode) {
        // Si la información que queremos meter es menor que la que esta en el nodo, entonces nos movemos a la izquierda
        if (newNode.datum < node.datum) {
            // Si el lado izquierdo es nulo, insertamos ahi el nodo
            if (node.left === null) {
                node.left = newNode
            }
            // Si no, tenemos que llamar recursicamente, hasta que encontremos el espacio nulo
            else {
                this.insertNode(node.left, newNode)
            }
        }

        // Por otro lado si la informacion que pasamos es mayor a la que esta en el nodo, entonces nos vamos a mover a la derecha
        else {
            // Si el lado derecho es nulo, insertamos ahi el nodo
            if (node.right === null) {
                node.right = newNode
            }
            // Si no es nulo, llamamos recursivamente hasta que encuentre el espacio nulo
            else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    // Metodo que nos permitira eliminar un nodo con informacion dada
    remove(datum) {
        // La raiz se reinicializa con un arbol modificado
        this.root = this.removeNode(this.root, datum)
    }

    // Metodo que remueve un nodo con una información dada y lo llama recursivamente hasta que se encutra el dato y lo remueve
    removeNode(node, datum) {
        // Si la raiz es nula
        if (node === null) {
            return null
        }
        // Si el dato a borrar es menor al dato en el nodo, nos movemos al subarbol de la izquierda
        else if (datum < node.datum) {
            node.left = this.removeNode(node.left, datum)
            return node
        }
        // Si la informacion a eliminarse es mayor, nos vamos a mover al subarbol derecho
        else if (datum > node.datum) {
            node.right = this.removeNode(node.right, datum)
            return node
        }
        // Si es el mismo valor, hemos encontrado el nodo
        else {
            // Borramos un nodo sin hijos
            if (node.left === null && node.right === null) {
                node = null
                return node
            }

            // Borramos un nodo con un hijo
            // Nodo izquierdo vacio
            if (node.left === null) {
                node = node.right
                return node
            }
            // Nodo derecho vacio
            else if (node.right === null) {
                node = node.left
                return node
            }

            // Borrar un nodo con 2 hijos
            // Tenemos que buscar el nodo minimo del subarbol de la derecha, almacenarlo y ponerlo en lugar del nodo eliminado
            let aux = this.findMinNode(node.right)
            node.datum = aux.datum

            node.right = this.removeNode(node.right, aux.datum)
            return node
        }
    }

    // Buscar el nodo minimo de un arbol, y este empieza de un nodo dado
    findMinNode(node) {
        // Si el apuntador izquierdo es nulo, entonces estamos en el nodo minimo
        if (node.left === null) {
            return node
        } else {
            return this.findMinNode(node.left)
        }
    }

    // Devolver la raiz de un arbol
    getRootNode() {
        return this.root
    }

    // Buscar el nodo con un valor de dato en todo el arbol
    search(node, datum) {
        // Si el arbol es vacio devolvemos nulo
        if (node === null) {
            return null
        }
        // Si el dato es menor al del nodo nos movemos a la izquierda
        else if (datum < node.datum) {
            return this.search(node.left, datum)
        }
        // Su el dato es mayor al del nodo se mueve a la derecha
        else if (datum > node.datum) {
            return this.search(node.right, datum)
        }
        // Si el dato es igual, devolvemos el nodo
        else {
            return node
        }
    }

    // subárbol izquierdo, raíz, subárbol derecho
    inorder(node) {
        if (node !== null) {
            this.inorder(node.left)
            console.log(node.datum)
            this.inorder(node.right)
        }
    }

    // raíz, subárbol izquierdo, subárbol derecho - pre

    // subárbol izquierdo, subárbol derecho, raíz - pos
}