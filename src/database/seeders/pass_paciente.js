// SEEDER PARA ENCRIPTAR LA CONTRASEÑA DE UN PACIENTE

'use strict';


const models = require('../models/index');
const bcrypt = require('bcryptjs');


module.exports = {
    up: function(queryInterface, Sequelize) {
    return Promise.all([
        models.paciente.findOrCreate({
            where: {
                id: "1"
            },
            defaults: {
                nombre: "Franco",
                apellido: "Demare",
                email: "franco.demare@gmail.com",
                edad: 30,
                password: bcrypt.hashSync('password', 10)
            }
        }),
    ])
},
};