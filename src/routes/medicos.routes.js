// RUTAS DE MEDICOS

// Importamos express

const router = require('express').Router()

const medicosController = require('../controllers/medicos.controller.js')
const validate = require('../middlewares/validate.js')
const medicoScheme = require('../middlewares/schemes/medico.scheme.js')

router.get('/listar', medicosController.listar)
router.post('/crear', validate(medicoScheme.crearMedico), medicosController.crear)

module.exports = router