// RUTAS DE TRATAMIENTOS

// Importamos express

const router = require('express').Router()

const tratamientosController = require('../controllers/tratamientos.controller.js')

router.get('/listar', tratamientosController.listar)

module.exports = router