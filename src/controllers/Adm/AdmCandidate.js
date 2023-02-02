
const candidate = require('../../model/Candidate')
const process = require('../../model/Process')
const relation = require('../../model/CandidateXProcess')
const database = require('../../config/db')
const login = require('../../controllers/login')

module.exports = {

    async AdmCandidates(req, res) {
        const response = await login.loginAdm(req, res)

        if (!response)
            res.render('../views/401')

        else {
            const DataCandidates = await relation.findAll({
                raw: true,
                include: [{
                    model: process,
                    require: true,
                    include: [{
                        model: job,
                        require: true
                    }],
                    model: candidate,
                    require: true
                }]
            });

            console.log(DataCandidates);


            res.render("../views/AdmCandidate", { DataCandidates });
        }
    },

    async AdmProcess(req, res) {
        const idProcess = req.params.id
        
        const registered = relation.findAll({
            raw: true,
            include: [{
                model: candidate,
                require: true
            }, {
                model: process,
                require: true
            }]
        })
    }

}