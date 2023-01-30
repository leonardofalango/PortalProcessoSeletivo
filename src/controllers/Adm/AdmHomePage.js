
const candidate = require('../../model/Candidate')
const process = require('../../model/Process')
const job = require('../../model/Jobs')
const adm = require('../../model/Adm')
const relation = require('../../model/CandidateXProcess')
const database = require('../../config/db')
const login = require('../../controllers/login')

module.exports = {
    
    async AdmHomePageGet(req, res) {
        const response = await login.loginAdm(req, res)
        if (!response)
            res.render('../views/401')

        else {
            const QtdCandidates = await relation.findAll({
                raw: true,
                group: "ProcessId",
                attributes: ['ProcessId', [database.fn('COUNT', database.col('CandidateId')), 'quantCandidates']]
            });
        

            const DataProcess = await process.findAll({
                attributes: ['id', 'capacity', 'details', 'phases', 'subscription_fee'],
                include: [{
                    model: job,
                    required: true,
                    attributes: ['name']
                }],
            });



            res.render("../views/AdmHomePage", { QtdCandidates, DataProcess});
        }
    }

}