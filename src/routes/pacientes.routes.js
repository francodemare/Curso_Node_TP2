// RUTAS DE PACIENTES

// Importamos express

const router = require('express').Router()

const pacientesController = require('../controllers/pacientes.controller.js')

router.get('/prueba', pacientesController.prueba)
router.post('/crear', pacientesController.crear)
router.get('/listar', pacientesController.listar)
router.get('/listarInfo/:id', pacientesController.listarInfo)


module.exports = router