// Necesario para correr este proyecto browserify y json-server, que son node_modules

// Una mala práctica, pero se hace por tiempo
const d = document

const { v4: uuidv4 } = require('uuid')

// Capturando los nodos de HTML con JS

const app = d.querySelector(".app")

const input_todo = d.getElementById("input-todo")
const btn_add = d.getElementById("btn-add")
const content_w = d.getElementById("content-wrapper")

const btn_background = d.querySelector(".btn-background")

// url base para consumir la API
// La librería pide que tengamos un endpoint, por eso le ponemos data aquí

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
    btn_2.classList.add("btn-delete")

    btn_1.addEventListener("click", () => {
        putData(id, input_todo.value)
    })

    btn_2.addEventListener("click", () => {
        deleteData(id)
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

// Probando llamando la funcion
// printTask("tender la cama", 1)

// Funcion que obetiene daos de la api
// Al declarar con async, por defecto se todo lo que retorne es una promesa
// Las promesas son asincronas, o la creas (es más de backend) o la consumes
const getData = async() => {
    try {

        // Fetch regresa una promesa, por eso necesita un await
        const response = await fetch(url)
            // EL método .json, es para cosas asíncronas, no usar JSON.parse, porque eso es para cosas síncronas
        const data = await response.json()

        data.forEach(element => {
            printTask(element.task, element.id)
        });
        return data

    } catch (error) {
        console.log(error)
        return error
    }

}



// Imprimir datos en db.json
const postData = async(task) => {
    try {
        // Fetch recibe como parámetro un objeto de configuración
        // Una petición lleva headers, como el HTML
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-type": 'application/json',
            },
            body: JSON.stringify({
                id: uuidv4(),
                task: task
            })
        })
        const data = response.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
        return error
    }
}

// Funcion que edita datos en la API
const putData = async(id, task) => {
    try {
        // Fetch recibe como parámetro un objeto de configuración
        // Una petición lleva headers, como el HTML
        const response = await fetch(`${url}/${id}`, {
            method: 'PUT',
            headers: {
                "Content-type": 'application/json',
            },
            body: JSON.stringify({
                task: task
            })
        })
        const data = response.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
        return error
    }
}

// Funcion para eliminar datos de la API de Json Server

const deleteData = async(id) => {
    try {
        // Fetch recibe como parámetro un objeto de configuración
        // Una petición lleva headers, como el HTML
        const response = await fetch(`${url}/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-type": 'application/json',
            },
        })
        const data = response.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
        return error
    }
}

// No es tan recomendable tener una función así, en JS, porque si lo ejecuto así, cualquier cambio en el documento podría estar llamándola y ejecutándola una y otra vez y no queremos eso. Entonces mejor la llamamos cuando el DOM se cargue
// getData()

d.addEventListener("DOMContentLoaded", getData)

btn_add.addEventListener('click', () => {
    return postData(input_todo.value)
})