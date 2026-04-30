// ARCHIVO PARA ESCRIBIR SCHEMES DE PACIENTEs

const Joi = require('joi') // importar Joi para validar los datos de entrada

let crearPaciente = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    email: Joi.string().email().optional(),
    edad: Joi.number().optional()
})

module.exports = {
    crearPaciente
}