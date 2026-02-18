const usuarioService = require('../services/usuario.service');

class UsuarioController {

  async registrar(req, res) {
    try {
      const usuario = await usuarioService.registrar(req.body);
      res.status(201).json(usuario);
    } catch (error) {
      res.status(400).json({ mensaje: error.message });
    }
  }

  async listar(req, res) {
    const usuarios = await usuarioService.listar();
    res.json(usuarios);
  }
}

module.exports = new UsuarioController();
