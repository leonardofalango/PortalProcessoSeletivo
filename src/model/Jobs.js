const Sequelize = require('sequelize');
const database = require('../config/db');

const Jobs = database.define('Jobs',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(200),
        allowNull: false
    }
});

Jobs.belongsTo(Process, {
    constraint: true,
    foreignKey: 'id'
})

module.exports = Jobs;