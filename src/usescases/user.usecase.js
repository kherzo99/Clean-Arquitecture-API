const bcrypt = require("bcrypt");
const User = require("../models/user.model.js"); 
const createError = require("http-errors");
const jwt = require("../lib/jwt.lib.js")

/*
Registro --> Autenticación 
*/


const register = async (data) => {
    // Hashear la password.

    const saltRounds = 10;
    console.log("data", data);
    const hashedPassword = await bcrypt.hash(data.password, saltRounds);
    // Cambiar la password en texto plano de la data por la password hasheada.
    data.password = hashedPassword;
    console.log("password hasheada", hashedPassword);
    //Crear el usuario.
    const user = await User.create(data);
    return user
}; 

const login = async (email, textPlainPassword) => {
    // Validar que un usuario haga match con el correo que ingresa.
    const user = await User.findOne({ email });
    console.log("El user con ese correo existe -->", user);
    if (!user) {
        throw createError(400, "invalid data");
    }
    // Vemos si es la password correcta.
    const isValidPassword = await bcrypt.compare(textPlainPassword,user.password);
    console.log("Is valid password? -->", isValidPassword);
    if (!isValidPassword) {
        throw createError(400, "invalid data");
    }

    // Si los datos coinciden.
    const token = jwt.sign({ email: user.email, id: user._id})
    return token;
}


module.exports = { register, login }

// http://localhost:8080/auth 