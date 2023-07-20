const bcrypt = require("bcrypt");
const User = require("../models/user.model.js"); 
const createError = require("http-errors");
const jwt = require("../lib/jwt.lib.js")


/*
Registro --> Autenticación 
*/

// Crear un usuario con la password hasheada.
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
// Validar los datos del usuario y autorizar acceso. 
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
// Enlistar a los usuarios.
const list = () => {
    const users = User.find();
    return users;
}
//Encontrar a un usuario por su ID. 
const get = (id) => {
    const user = User.findById(id);
    return user;
}
//Actualizar la información de un usuario. 
const update = (id , data) => {
    const updateUser = User.findByIdAndUpdate (id, data, {new:"true"})
    return updateUser
};
//Borrar un usuario. 
const remove = (id) => {
    const deleteUser = User.findByIdAndDelete (id)
    return deleteUser
};


module.exports = { register, login, list, get, update, remove }

// http://localhost:8080/auth 