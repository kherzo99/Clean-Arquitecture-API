/*
->Aqui se ponen los middlewares (ejecución)
->Endpoint de home 
*/

//Routes 
const routerKoder = require("./routes/koder.route");
const routerMentor = require("./routes/mentor.route");
const routerUser = require ("./routes/user.route");
const routeAuth = require("./routes/auth.route.js")
const express = require("express")
const app = express(); 

//Middlewares de toda nuestra API. 
app.use(express.json());



// Middleware de rutes 
app.use("/koders", routerKoder ); 
app.use("/mentors", routerMentor);
app.use("/users", routerUser);
app.use("/auth", routeAuth); 





//Endpoint de home 
app.get ("/", (request, response) => {
    response.json("Nuestra API sirve!");
})

//Exportar 
module.exports = app