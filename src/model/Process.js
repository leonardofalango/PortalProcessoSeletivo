const sequelize = require('sequelize');
const database = require('../config/db');
const job = require('../model/Jobs');

const Process = database.define('Process', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    capacity: {
        type: sequelize.INTEGER,
        allowNull: false
    }
});

Process.belongsTo(job, {
    constraint: true, //Garantir integridade referencial
    foreignKey: 'id'
   })

module.exports = Process;