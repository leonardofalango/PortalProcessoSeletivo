const { name } = require('ejs');
const user = require('../model/Candidate')
const process = require('../model/Process')
const job = require('../model/Jobs')
const relation = require('../model/CandidateXProcess')

module.exports = {

    async homePageGet(req, res) {
        const response = await login.login(req, res)
    
        if (!response)
            res.render('../views/401')
        
        else {
            const processData = await process.findAll({
                raw: true,
                attributes: ['id', 'capacity', 'FK_job', 'details', 'phases', 'subscription_fee']
            });

            const candidateData = await user.findAll({
                raw: true,
                attributes: ['id', 'login', 'password', 'profile_pic', 'name', 'birthdate', 'address', 'cpf', 'curriculum']
            });

            const jobData = await job.findAll({
                raw: true,
                attributes: ['id', 'name']
            });


            res.render("../views/homePage", { processData, candidateData, jobData });
        }
    }

}