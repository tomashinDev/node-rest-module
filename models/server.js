const express = require('express');
const cors = require('cors')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        //rutas de la aplicacion
        this.routes();
        //middlewares
        this.middlewares();

    }

    routes() {
        this.app.use('/api/users', require('../routes/user'));
    }

    middlewares() {
        this.app.use(cors());

        //lectura y parse de json

        this.app.use(express.json());

        this.app.use(express.static('public'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto: ', this.port)
        });
    }
}

module.exports = Server;