// Una mala práctica, pero se hace por tiempo
const d = document

// Capturando los nodos de HTML con JS

const app = d.querySelector(".app")

const input_todo = d.getElementById("input-todo")
const btn_add = d.getElementById("btn-add")
const content_w = d.getElementById("content-wrapper")

const btn_background = d.querySelector(".btn-background")

// url base para consumir la API
const url = "http://localhost:3000/data"

// Funcion que imprime elementos li y button en el DOM
const printTask = (task, id) => {
    let li = d.createElement("li")
    let p = d.createElement("p")
    let taskText = d.createTextNode(task)
    let div = d.createElement("div")

    const btn_1 = d.createElement("button")
    const btn_2 = d.createElement("button")
    let btn1Text = d.createTextNode("Editar")
    let btn2Text = d.createTextNode("Eliminar")

    btn_1.classList.add("btn-edit")
    btn_1.classList.add("btn-delete")

    btn_1.addEventListener("click", () => {
        console.lo("Editando...")
    })

    btn_2.addEventListener("click", () => {
        console.lo("Eliminando...")
    })

    // Para añadir solo un elemento hijo, uso append Child
    p.appendChild(taskText)
    btn_1.appendChild(btn1Text)
    btn_2.appendChild(btn2Text)

    // Append sirve para añadir más de un hijo
    div.append(btn_1, btn_2)
    li.append(p, div)

    content_w.appendChild(li)

    return { id, task }

}

printTask("tender la cama", 1)