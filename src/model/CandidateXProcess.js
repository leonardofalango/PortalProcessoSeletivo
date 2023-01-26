const Candidate = require('./Candidate');
const Process = require('./Process');

Candidate.belongsToMany(Process, {
    through: "CandidateXProcesses",
    as: "Processes", // se ficar invertido os nomes, trocar por "Process_id"
    foreignKey: 'Candidate_id'
});

Process.belongsToMany(Candidate, {
    through: "CandidateXProcesses",
    as: "Candidates", // trocar aqui também
    foreignKey: 'Process_id'
});
