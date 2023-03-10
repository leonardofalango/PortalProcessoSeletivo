const sequelize = require('sequelize');
const database = require('../config/db');

const Adm = database.define('Adm',{
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    login: {
        type: sequelize.STRING(80),
        allowNull: false,
        unique: true
    },
    email: {
        type: sequelize.STRING(80),
        allowNull: false,
        unique: true
    },

    password: {
        type: sequelize.STRING(200),
        allowNull: false,
        unique: true
    },

    name: {
        type: sequelize.STRING(100),
        allowNull: false
    },

    birthdate: {
        type: sequelize.DATE(),
        allowNull: false
    },

    address: {
        type: sequelize.STRING(200),
        allowNull: false
    },

    cpf: {
        type: sequelize.STRING(12),
        allowNull: false,
        unique: true
    },

    profile_picture: {
        type: sequelize.STRING(80),
        allowNull: false,
        unique: true
    }
});

module.exports = Adm;