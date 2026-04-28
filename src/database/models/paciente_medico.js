'use strict' // para que no se pueda usar variables no definidas

module.exports = (sequelize, DataTypes) => {

    let Paciente_Medico = sequelize.define('paciente_medico', { // defino el modelo de la tabla usuario
        id: {
            type: DataTypes.BIGINT, // tipo de dato
            autoIncrement: true, // autoincrementable
            primaryKey: true, // clave primaria 
            allowNull: false // no permitir nulo
        },
        createdAt: { // fecha de creacion
            type: DataTypes.DATE, // tipo de dato
            field: 'created_at', // nombre de la columna
            defaultValue: DataTypes.NOW, // valor por defecto
            allowNull: false // no puede ser nulo
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at',
            defaultValue: DataTypes.NOW,
            allowNull: false
        },
        deletedAt: { // fecha de eliminacion
            type: DataTypes.DATE, // tipo de dato
            field: 'deleted_at' // nombre de la columna
        }
    }, {
        paranoid: true, // elimina los registros de forma logica
        freezeTableName: true, // no va a modificar el nombre de la tabla a plural
    })

    Paciente_Medico.associate = models => {
        // aca se relacionan las tablas de la base de datos  
        Paciente_Medico.belongsTo(models.paciente)
        Paciente_Medico.belongsTo(models.medico)
    }

    return Paciente_Medico
}