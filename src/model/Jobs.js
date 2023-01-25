const sequelize = require('sequelize');
const database = require('../config/db');
const Process = require('../model/Process');


const Jobs = database.define('Jobs',{
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: sequelize.STRING(200),
        allowNull: false
    }
});




module.exports = Jobs;