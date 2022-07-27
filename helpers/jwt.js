const jwt = require('jsonwebtoken')

const generateJWT = (id) => {

  return new Promise((resolve, reject) => {
    const payload = { id };

    jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '30d'
    }, (err, token) => {
      if (err) {
        console.log(err);
        reject('No se pudo generar el token');
      }

      resolve(token);
    })
  })

}


module.exports = {
  generateJWT
}