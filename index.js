require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const app = require("/Users/karlaherzo/Desktop/BACKEND/Clean-Arquitecture-API/src/server.js")


/*
1. Conexión a la base de datos 
2. Prender el servidor
*/

console.log("variables de entorno:", process.env)

const {DB_USERNAME, DB_PASSWORD, DB_HOST, DB_NAME } = process.env

const databaseURL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

mongoose.connect(databaseURL)
.then (() =>  {
    console.log("We're connected to our DB")
    app.listen(8080, () => {
        console.log("El servidor esta encendido-1");
    })
})
.catch((err) => {
    console.log("we have an error", err)
}) 
