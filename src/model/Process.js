const sequelize = require('sequelize');
const database = require('../config/db');

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

module.exports = Process;