const Sequelize = require('sequelize');
const database = require('../config/db');

const Process = database.define('Process', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    capacity: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Process;