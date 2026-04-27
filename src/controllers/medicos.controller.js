// Controller de medicos

module.exports = {

    listar: async (req, res) => {
        try {
            const medicos = require('../const/globalConstants.js').medicos
            res.json({ message: 'lista exitosa', data: medicos })
        } catch (err) {
            console.log(err)
        }
    },

}