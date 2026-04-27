// Controller de tratamientos

module.exports = {

    listar: async (req, res) => {
        try {
            const tratamientos = require('../const/globalConstants.js').tratamientos
            res.json({ message: 'lista exitosa', data: tratamientos })
        } catch (err) {
            console.log(err)
        }
    },

}