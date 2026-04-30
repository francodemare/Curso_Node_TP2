'use strict';

const models = require('../models/index');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      models.medico.findOrCreate({
        where: { id: "2" },
        nombre: "Martin",
        apellido: "JS",
        email: "[EMAIL_ADDRESS]",
        especialidad: "Cirujano",
        tiempo_trabajando: 2
      }),
    ])
  },
  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
