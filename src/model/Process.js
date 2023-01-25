const sequelize = require('sequelize');
const database = require('../config/db');
const Jobs = require('../model/Jobs');

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
    },

    FK_job: {
        type: sequelize.INTEGER,
        allowNull: false
    }

});



Process.belongsTo(Jobs, { foreignKey: "FK_job" });

// Process.belongsTo(Jobs, {
//     constraint: true, //Garantir integridade referencial
//     foreignKey: 'id'
// });

module.exports = Process;