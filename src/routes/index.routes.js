const { Router } = require("express")
const pacientesRoutes = require('./pacientes.routes.js')
const medicosRoutes = require('./medicos.routes.js')
const tratamientosRoutes = require('./tratamientos.routes.js')

const rutas_init = () => {
    const router = Router()

    router.use('/pacientes', pacientesRoutes)
    router.use('/medicos', medicosRoutes)
    router.use('/tratamientos', tratamientosRoutes)

    return router

}

module.exports = { rutas_init }