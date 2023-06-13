/*
->Aqui se ponen los middlewares (ejecución)
->Endpoint de home 
*/

//Routes 
const routerKoder = require("./routes/koder.route");
const express = require("express")
const app = express(); 

//Middlewares de toda nuestra API. 
app.use(express.json());



// Middleware de rutes 
app.use("/koders", routerKoder ); 



//Endpoint de home 
app.get ("/", (request, response) => {
    response.json("Nuestra API sirve!");
})

//Exportar 
module.exports = app