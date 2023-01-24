const Sequelize = require('sequelize');
const database = require('../config/db');

const Adm = database.define('Adm',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    login: {
        type: Sequelize.STRING(80),
        allowNull: false,
    },

    password: {
        type: Sequelize.STRING(200),
        allowNull: false,
        unique: true
    },

    name: {
        type: Sequelize.STRING(100),
        allowNull: false
    },

    birthdate: {
        type: Sequelize.DATE(),
        allowNull: false
    },

    address: {
        type: Sequelize.STRING(200),
        allowNull: false
    },

    cpf: {
        type: Sequelize.STRING(12),
        allowNull: false,
        unique: true
    },
});

module.exports = Adm;