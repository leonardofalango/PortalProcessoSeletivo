const login = require('./login/login')
const process = require('../model/Process');
const candidate = require('../model/Candidate');
const relation = require('../model/CandidateXProcess')


module.exports = {
    async processDetailsGet(req, res) {

        const user = await login.returnUser(req, res)
        if (user) {
            const processo = await process.findByPk(req.params.id, {
                raw: true,
                attributes: ['id', 'capacity', 'details', 'phases', 'subscription_fee', 'date', 'job']

            })

            const isSub = relation.findOne({
                raw: true,
                where: {
                    CandidateId: user.id,
                    ProcessId: processo.id
                }
            }) !== null? false : true
            
            res.render('../views/user/processDetails', {processo, isSub});
        }
        else
            res.render("../views/erro/401")
    },

    async Subscribe(req, res) {

        const cand = await login.returnUser(req, res)
        const data = req.body;

        await relation.create({
            stage: 1,
            CandidateId: cand.id,
            ProcessId: data.idProcess
        })

        res.redirect('/homePage')
    },

    async remove(req, res) {

        const isLog = login.loginAdm();
        if (isLog)
        {
            
                    const cand = await login.returnUser(req, res)
                    const proc = await process.findByPk(req.params.id, {
                        raw: true,
                        attributes: ['id', 'capacity', 'details', 'phases', 'subscription_fee', 'date', 'job']
            
                    })
            
                    relation.destroy({
                        raw: true,
                        where: {
                            CandidateId: user.id,
                            ProcessId: processo.id
                        }
                    })
                    res.redirect('/AdmProcessDetails/' + req.params.id)
        }
        else res.render('../views/erro/401')

    }

}
