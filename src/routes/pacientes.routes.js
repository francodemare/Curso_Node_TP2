// RUTAS DE PACIENTES

// Importamos express

const router = require('express').Router()

const pacientesController = require('../controllers/pacientes.controller.js')

const validate = require('../middlewares/validate.js')
const pacienteScheme = require('../middlewares/schemes/paciente.scheme.js')

router.get('/prueba', pacientesController.prueba)
router.post('/crear', validate(pacienteScheme.crearPaciente), pacientesController.crear)
router.get('/listar', pacientesController.listar)
router.get('/listarInfo/:id', pacientesController.listarInfo)


module.exports = router