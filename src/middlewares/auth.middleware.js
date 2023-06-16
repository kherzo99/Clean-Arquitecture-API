/*


El token se pone en los HEADERS (no en el body).  

headers : {
    content-type: application/json
    authorization: `Bearer ${token}`
}
*/

const jwt = require ("../lib/jwt.lib.js")

const auth = (request, response, next ) => {
    try {
    //Obtener mi header de authorization
    const authorization = request.headers.authorization;
    // Quitarle Bearer a mi header para obtener el token.
    const token = authorization.split(" ")[ 1 ];
    console.log("Token -->" , token);
    // Verificar el token
    const isVerified = jwt.verify(token);
    console.log("Si esta verificado? ---> ", isVerified);
    next()
    } catch (err) {
        response.status(401).json({
            success: false, 
            message: err.message
        })

    }
   
}

module.exports = auth;