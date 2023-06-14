const Koder = require("../models/koder.model.js")

/*
- CREAR
-ACTUALIZAR 
-OBTENER 
-ENLISTAR 
-ELIMINAR

- method -> create
await.model.create()

-El modelo siempre va capitalizado. 

-Funciones.

*/
//Enlistar koders
const list = () => {
    const koders = Koder.find();
    return koders;
};
//Encontrar koder por id.
const get = (id) => {
    const getKoder = Koder.findById(id);
    return getKoder;
};
//Crear un koder (post).
const create = (data) => {
    const newKoder = Koder.create(data);
    return newKoder
};
//Actualizar un koder (patch).
const update = (id , data) => {
    const updatedKoder = Koder.findByIdAndUpdate (id, data, {new:"true"})
    return updatedKoder
};
//Borrar un koder. 
const remove = (id) => {
    const deletedKoder = Koder.findByIdAndDelete (id)
    return deletedKoder
};



module.exports = { list , get , create , update , remove } 