const { Router } = require('express')
const { usuariosGet, usuariosDelete, usuariosPatch, usuariosPost, usuariosPut } = require('../controller/user')

const routes = Router();

routes.get('/', usuariosGet);

routes.post('/', usuariosPost);

routes.put('/:id', usuariosPut);

routes.delete('/', usuariosDelete);

routes.patch('/', usuariosPatch);

module.exports = routes