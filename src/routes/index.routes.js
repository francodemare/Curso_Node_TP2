const { Router } = require("express")
const pacientesRoutes = require('./pacientes.routes.js')
const medicosRoutes = require('./medicos.routes.js')
const tratamientosRoutes = require('./tratamientos.routes.js')

const authRoutes = require("./auth.routes")
const decodeJWT = require("../middlewares/decodeJWT")

const rutas_init = () => {
    const router = Router()

    router.use('/pacientes', decodeJWT, pacientesRoutes)
    router.use('/medicos', medicosRoutes)
    router.use('/tratamientos', tratamientosRoutes)

    return router

}

const rutas_auth = () => {
    const router = Router()

    router.use("/auth", authRoutes)

    return router
}

module.exports = { rutas_init, rutas_auth }