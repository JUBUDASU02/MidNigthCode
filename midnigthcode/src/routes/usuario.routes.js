const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario.controller');

router.post('/', (req, res) => usuarioController.registrar(req, res));
router.get('/', (req, res) => usuarioController.listar(req, res));

module.exports = router;
