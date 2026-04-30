'use strict';

const models = require('../models/index');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      models.paciente.findOrCreate({
        where: { id: "6" },
        nombre: "Martin",
        apellido: "JS",
        email: "[EMAIL_ADDRESS]",
        edad: 30
      }),
      models.paciente.findOrCreate({
        where: { id: "7" },
        nombre: "Maria",
        apellido: "NS",
        email: "[EMAIL_ADDRESS]",
        edad: 20
      })
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
};
