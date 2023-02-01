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
    },

    date: {
        type: sequelize.DATE,
        allowNull: false
    },

    details: {
        type: sequelize.STRING('MAX'),
        allowNull: false
    },

    phases: {
        type: sequelize.INTEGER,
        allowNull: false
    },

    subscription_fee: {
        type: sequelize.FLOAT,
        allowNull: false
    },

    job: {
        type: sequelize.STRING(80),
        allowNull: false
    }
});


module.exports = Process;