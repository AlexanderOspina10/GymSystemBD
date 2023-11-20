const express = require('express')
const cors = require('cors')//Implementar seguridad
const { dbConection } = require('../database/config')

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.clientePath = '/cliente' //Ruta de la API
        this.middlewares()
        this.routes()
        this.conectarDB()
    }

    

    listen(){
        this.app.listen(
            this.port, () => {
                console.log('Escuchando por el puerto '+this.port)
            } 
        )
    }
    routes(){
        this.app.use(this.clientePath, require('../routes/cliente'))
    }

    async conectarDB(){
        await dbConection()
    }

    middlewares(){
        this.app.use(cors()); //Indicar el uso de cors
    }

}

module.exports = {Server} //Exportación de la clase