const login = require('./login')
const process = require('../model/Process');
const candidate = require('../model/Candidate');
const relation = require('../model/CandidateXProcess')


module.exports = {
    async processDetailsGet(req, res) {
        if (login) {
            const processo = await process.findByPk(req.params.id, {
                raw: true,
                attributes: ['id', 'capacity', 'details', 'phases', 'subscription_fee', 'date', 'job']

            })

            res.render('../views/processDetails', {processo});
        }
        else
            res.redirect("/")
    },

    async Subscribe(req, res) {
        const data = req.body;

        await relation.create({
            stage: 1,
            createdAt: Date.prototype.getDate(),
            updatedAt: Date.prototype.getDate(),
            CandidateId: candidate.id,
            ProcessId: process.id
        },
        {
            where: {
                id: data.id
            }
        })

        res.redirect('/homePage')
    },

}
