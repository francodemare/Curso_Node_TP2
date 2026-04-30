// Controller de medicos

const models = require('../database/models') // importar el modelo de usuario
const errors = require('../const/errors')

module.exports = {

    listar: async (req, res) => {
        try {
            const medicos = await models.medico.findAll({
                include: [{
                    model: models.paciente_medico,
                    include: [{
                        model: models.paciente
                    }]
                }]
            })
            res.json({
                success: true,
                data: {
                    medicos: medicos
                }
            })

        } catch (err) {
            return next(err)
        }
    },
    listarInfo: async (req, res, next) => {
        try {
            const medicos = await models.medico.findOne({
                where: {
                    id: req.params.id
                }
            })
            if (!medicos) {
                return next(errors.MedicoInexistente)
            }

            res.json({
                success: true,
                data: {
                    pacientes: pacientes
                }
            })

        } catch (err) {
            return next(err)
        }
    },
    crear: async (req, res, next) => {
        try {
            const medicos = await models.medico.create(req.body)

            res.json({
                success: true,
                data: {
                    id: medicos.id
                }
            })

        } catch (err) {
            return next(err)
        }
    },

}