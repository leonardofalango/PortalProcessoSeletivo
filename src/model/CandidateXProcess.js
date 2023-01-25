const Sequelize = require('sequelize');
const database = require('../config/db');

const CandidateXProcess = database.define('CandidateXProcess',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
});

CandidateXProcess.belongsTo(Process, {
    constraint: true,
    foreignKey: 'id'
});

CandidateXProcess.belongsTo(Candidate, {
    constraint: true,
    foreignKey: 'id'
});

module.exports = CandidateXProcess;