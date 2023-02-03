
const candidate = require('../../model/Candidate')
const process = require('../../model/Process')
const relation = require('../../model/CandidateXProcess')
const database = require('../../config/db')
const login = require('../login/login')

module.exports = {

    async admProcess(req, res) {
        const idProcess = req.params.id
        
        const processo = await process.findByPk(req.params.id, {
            raw: true,
            attributes: ['id', 'capacity', 'details', 'phases', 'subscription_fee', 'date', 'job']
        })    

        const registered = await database.query(`SELECT C.id, C.name FROM Candidates C 
        join CandidateXProcesses CX on CX.CandidateId = C.id 
        join Processes P on CX.ProcessId = P.id WHERE P.id = ${idProcess}` )

        const list = []

        let index = 0;
        registered.forEach(element => {
            if (index % 2 == 0) {
                list.push(element)
            }
            index++
        });

        let i = list[0]
        console.log(i);
        res.render('../views/adm/AdmProcessDetails', { processo, i })
    }

}

// TROCAR NOME DE AdmCandidate PARA AdmProcessDetails