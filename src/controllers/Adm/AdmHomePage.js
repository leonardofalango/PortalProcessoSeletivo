
const candidate = require('../../model/Candidate')
const process = require('../../model/Process')
const job = require('../../model/Jobs')
const adm = require('../../model/Adm')
const relation = require('../../model/CandidateXProcess')
const { Sequelize } = require('sequelize')

module.exports = {
    
    async AdmHomePageGet(req, res) {
        
        const QtdCandidates = await relation.findAll({
            raw: true,
            attributes: ['ProcessId', [database.fn('COUNT', database.col('CandidateId')), 'quantCandidates']]
        });


        
        console.log("\n\n\n")
        console.log(QtdCandidates.quantCandidates)
        console.log("\n\n\n")
        

        const DataProcess = await process.findAll({
            raw: true,
            attributes: ['id', 'capacity', 'FK_job', 'details', 'phases', 'subscription_fee'],
            include: [{
                model: job,
                required: true,
                attributes: ['name']
            }]
        });


    console.log(DataProcess)



        res.render("../views/AdmHomePage", { QtdCandidates, DataProcess });
    }

}