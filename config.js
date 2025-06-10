require('dotenv').config(); //dotenv: biblioteca de js para cargar credenciales en mi app
const configDB = {
    host: process.env.host,
    user: process.env.user,
    pwd: process.env.pwd,
    db: process.env.db,
}

console.log(configDB)