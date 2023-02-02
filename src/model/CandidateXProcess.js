const sequelize = require('sequelize');
const Candidate = require('./Candidate');
const database = require('../config/db');
const Process = require('./Process');

const cadidateProcess = database.define('CandidateXProcesses', { stage: sequelize.INTEGER })
Candidate.belongsToMany(Process, { through: cadidateProcess })
Process.belongsToMany(Candidate, { through: cadidateProcess })

module.exports = cadidateProcess;