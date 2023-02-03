const login = require('../login/login')
const process = require('../../model/Process');
const candidate = require('../../model/Candidate');
const relation = require('../../model/CandidateXProcess')


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

        const isLog = await login.loginAdm(req, res);
        if (isLog)
        {            
            const proc = await process.findByPk(req.body.ProcessId, {
                raw: true,
                attributes: ['id']
    
            })
    
            await relation.destroy({
                raw: true,
                where: {
                    CandidateId: req.body.idUser,
                    ProcessId: proc.id
                }
            })
            res.redirect('/AdmCandidate/' + req.body.ProcessId)
        }
        else res.render('../views/erro/401')

    }

}
