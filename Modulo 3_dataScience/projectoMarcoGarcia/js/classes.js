// Constants
let students = []

class Student {
    constructor(name, lastName, age) {
        this.name = name
        this.lastName = lastName
        this.age = age
    }


}

const addStudent = () => {
    let name = document.querySelector('#name').value
    let lastName = document.querySelector('#lastname').value
    let age = document.querySelector('#age').value
    return students.push(new Student(name, lastName, age))
}


const printTable = () => {

}