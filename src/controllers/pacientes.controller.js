// Controller de pacientes

const models = require('../database/models') // importar el modelo de usuario

module.exports = {

    listar: async (req, res, next) => {
        try {
            const pacientes = await models.paciente.findAll()

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

    listarInfo: async (req, res, next) => {
        try {
            const pacientes = await models.paciente.findOne({
                where: {
                    id: req.params.id
                },
                include: {
                    model: models.paciente_medico,
                    include: [{
                        model: models.medico
                    }]
                }
            })

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
            const pacientes = await models.paciente.create(req.body)

            const relacion = await models.paciente_medico.create({
                pacienteId: pacientes.id,
                medicoId: req.body.medico_id
            })

            res.json({
                success: true,
                data: {
                    id: pacientes.id
                }
            })

        } catch (err) {
            return next(err)
        }
    },

    prueba: async (req, res) => {
        try {
            console.log('ejecutando prueba')

            res.json({
                message: "Hola mundo"
            })

        } catch (err) {
            console.log(err)
        }
    }

}
