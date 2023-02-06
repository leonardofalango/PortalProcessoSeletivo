
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
            const DataProcess = await database.query(
                `SELECT cp.ProcessId, p.job, p.subscription_fee, p.phases, p.details, p.id, p.capacity, p.date, COUNT(cp.ProcessId) as NumeroDeInscritos from CandidateXProcesses cp
                    JOIN Processes p ON
                        p.id = cp.ProcessId
                    GROUP BY cp.ProcessId, p.job, p.phases, p.details, p.date, p.capacity, p.id, p.subscription_fee`
            );

            res.render("../views/adm/AdmHomePage", { DataProcess });
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