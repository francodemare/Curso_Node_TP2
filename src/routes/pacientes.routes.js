// RUTAS DE PACIENTES

// Importamos express

const router = require('express').Router()

const pacientesController = require('../controllers/pacientes.controller.js')

const validate = require('../middlewares/validate.js')
const pacienteScheme = require('../middlewares/schemes/paciente.scheme.js')

// ------------------- PARA SUBIR ARCHIVOS ------------------- //
const globalConstants = require('../const/globalConstants') // importar las constantes globales
var multer = require('multer') // MULTER ES UN MODULO PARA SUBIR ARCHIVOS A NUESTRO SERVIDOR 
var upload = multer({ // INSTANCIAMOS MULTER Y LO CONFIGURAMOS
    dest: 'uploads/archivos-pacientes/', //RUTA DONDE SE VAN A SUBIR LOS ARCHIVOS
    limits: { fileSize: globalConstants.MAX_FILE_SIZE } // PESO MAXIMO DEL ARCHIVO 20MB
})
// ----------------------------------------------------------- //

router.post('/subirArchivo', upload.single('jpg'), pacientesController.subirArchivo) // RUTA PARA SUBIR UN ARCHIVO
router.post('/descargarArchivo/', pacientesController.descargarArchivo) // RUTA PARA OBTENER UN ARCHIVO

router.get('/prueba', pacientesController.prueba)
router.post('/crear', validate(pacienteScheme.crearPaciente), pacientesController.crear)
router.get('/listar', pacientesController.listar)
router.get('/listarInfo/:id', pacientesController.listarInfo)


module.exports = router