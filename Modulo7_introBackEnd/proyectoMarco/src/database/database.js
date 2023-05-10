import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    "piezas", // nombre de la base
    "postgres", //nombre de usuario con el que nos conectamos a la base
    "magg1867", //contraseña de la base
    {
        host:"localhost",
        port: 5432,
        dialect:"postgres" //Que motor de base se utiliza
    }
)