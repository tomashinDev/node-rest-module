const { response, request } = require('express')

const usuariosGet = (req = request, res = response) => {

    const query = req.query

    res.json({
        msg: 'get api - controller',
        query
    })
}

const usuariosPost = (req = request, res = response) => {

    const bf = req.body;

    res.json({
        msg: 'post api - controller',
        bd: bf
    })
}

const usuariosPut = (req = request, res = response) => {

    const id = req.params.id

    res.json({
        msg: 'put api - controller',
        id
    })
}

const usuariosPatch = (req = request, res = response) => {
    res.json({
        msg: 'patch api - controller'
    })
}

const usuariosDelete = (req = request, res = response) => {
    res.json({
        msg: 'delete api - controller'
    })
}


module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPatch,
    usuariosPost,
    usuariosPut
}