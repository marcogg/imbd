// El controlador es un almacén de funciones
import modelosInit from '../models/init.models.js'
import { sequelize } from '../database/database.js'
let modelos = modelosInit(sequalize)

export const hola = (req, res) => {
    res.status(200).json({"respuesta":"adios"})
}


export const nombreA = (req, res) => {
    let {nombre} = req.params
    res.status(200).json({"respuesta":"Hola "+nombre+apellido})
}


export const persona = (req, res) => {
    let {nombre, apellidos} = req.body
    console.log(nombre)
    res.status(200).json(req.body)
}