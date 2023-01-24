const Sequelize = require('sequelize');
const database = require('../config/db');

const Candidate = database.define('Candidate',{
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

    profile_pic: {
        type: Sequelize.STRING(50),

        allowNull: false
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

    curriculum: {
        type: Sequelize.STRING(),
        allowNull: false,
    }
})

module.exports = Candidate;