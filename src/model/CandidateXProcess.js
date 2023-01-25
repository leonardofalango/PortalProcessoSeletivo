const Candidate = require('./Candidate');
const Process = require('./Process');

Candidate.belongsToMany(Process, {
    through: "id",
    as: "Candidate_id", // se ficar invertido os nomes, trocar por "Process_id"
    foreignKey: 'id'
});

Process.belongsToMany(Candidate, {
    through: "id",
    as: "Process_id", // trocar aqui também
    foreignKey: 'id'
});

module.exports = CandidateXProcess;