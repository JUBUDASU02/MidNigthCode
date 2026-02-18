const usuarioRepository = require('../repositories/usuario.repository');

class UsuarioService {

  async registrar(usuarioData) {

    const existe = await usuarioRepository.findByEmail(usuarioData.email);

    if (existe) {
      throw new Error('El usuario ya está registrado');
    }

    return await usuarioRepository.create(usuarioData);
  }

  async listar() {
    return await usuarioRepository.findAll();
  }
}

module.exports = new UsuarioService();
