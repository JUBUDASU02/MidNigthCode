let usuarios = [];

class UsuarioRepository {

  async create(usuario) {
    usuarios.push(usuario);
    return usuario;
  }

  async findByEmail(email) {
    return usuarios.find(u => u.email === email);
  }

  async findAll() {
    return usuarios;
  }
}

module.exports = new UsuarioRepository();
