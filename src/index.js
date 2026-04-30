// var http = require('http') //importa el módulo http para criar um servidor web

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.write('<h1>hola</h1>') 
// }).listen(3000)

// console.log('Servidor en http://localhost:3000')

const globalConstants = require('./const/globalConstants.js') // importar el archivo de constantes globales
const routerConfig = require('./routes/index.routes.js')
const errorHandler = require('./middlewares/erros.js')

let createError = require('http-errors')

const express = require('express') // Importamos el framework express
const port = globalConstants.PORT_SERVER
const logger = require('morgan')

const configuracionApi = (app) => {
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(logger('dev'))
}

const configuracionRouter = (app) => {
    app.use('/api/', routerConfig.rutas_init())

    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
        next(createError(404))
    })
    app.use(errorHandler)
}

const init = () => { // Middleware para procesar cuerpos de peticiones en formato JSON (necesario para POST/PUT)
    const app = express() // Creamos la instancia de la aplicación
    configuracionApi(app)

    configuracionRouter(app)

    app.listen(port, (err) => {
        if (err) {
            console.error(`Error al iniciar el servidor: ${err.message}`)
            process.exit(1)
        }
        console.log(`Servidor corriendo en http://localhost:${port}`)
        console.log('Presiona Ctrl+C para detener el servidor')
    })
}

// Inicializamos los middlewares
init()
