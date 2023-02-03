
const process = require('../../model/Process')
const relation = require('../../model/CandidateXProcess')
const database = require('../../config/db')
const login = require('../login/login')

module.exports = {

    async admHomePageGet(req, res) {
        const response = await login.loginAdm(req, res)

        if (!response)
            res.render('../views/erro/401')

        else {
            const QtdCandidates = await relation.findAll({
                raw: true,
                group: "ProcessId",
                attributes: ['ProcessId', [database.fn('COUNT', database.col('CandidateId')), 'quantCandidates']]
            });


            const DataProcess = await process.findAll({
                attributes: ['id', 'capacity', 'details', 'phases', 'subscription_fee', 'date', 'job'],
            });



            res.render("../views/adm/AdmHomePage", { QtdCandidates, DataProcess });
        }
    },

    async insertProcess(req, res) {
        const data = req.body;

        await process.create({
            job: data.job,
            capacity: data.capacity,
            date: data.date,
            phases: data.phases,
            details: data.description,
            subscription_fee: data.subscription_fee
        })
        res.redirect('/admHomePage')
    },

    async updateProcess(req, res) {
        const data = req.body;
        console.log(data)

        await process.update({
            job: data.job,
            capacity: data.capacity,
            date: data.date,
            phases: data.phases,
            details: data.details,
            subscription_fee: data.subscription_fee
        },
        {
            where: {
                id: data.id
            }
        })
        res.redirect('/admHomePage')
    }

}