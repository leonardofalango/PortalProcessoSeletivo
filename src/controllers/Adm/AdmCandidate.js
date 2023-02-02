
const candidate = require('../../model/Candidate')
const process = require('../../model/Process')
const relation = require('../../model/CandidateXProcess')
const database = require('../../config/db')
const login = require('../../controllers/login')

module.exports = {

    // async AdmCandidates(req, res) {
    //     const response = await login.loginAdm(req, res)

    //     if (!response)
    //         res.render('../views/401')

    //     else {
    //         const DataCandidates = await relation.findAll({
    //             raw: true,
    //         });

    //         console.log(DataCandidates);


    //         res.render("../views/AdmCandidate", { DataCandidates });
    //     }
    // },

    async AdmProcess(req, res) {
        const idProcess = req.params.id
        
        const processo = await process.findByPk(req.params.id, {
            raw: true,
            attributes: ['id', 'capacity', 'details', 'phases', 'subscription_fee', 'date', 'job']

        })
        
        const registered = await relation.findAll({
            raw: true,
            include: [candidate, process],
        })

        console.log(registered)

        res.render('../views/AdmProcessDetails', { processo, registered })
    }

}