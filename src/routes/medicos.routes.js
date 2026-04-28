// RUTAS DE MEDICOS

// Importamos express

const router = require('express').Router()

const medicosController = require('../controllers/medicos.controller.js')

router.get('/listar', medicosController.listar)
router.post('/crear', medicosController.crear)

module.exports = router