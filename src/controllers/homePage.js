const { name } = require('ejs');
const user = require('../model/Candidate')
const process = require('../model/Process')
const relation = require('../model/CandidateXProcess')
const login = require('./login/login')

module.exports = {

    async homePageGet(req, res) {
        const response = await login.login(req, res)
    
        if (!response)
            res.render('../views/erro/401')
        
        else 
        {
            const DataProcess = await process.findAll({
                attributes: ['id', 'capacity', 'details', 'phases', 'subscription_fee', 'date', 'job']
            });
        
            res.render("../views/user/homePage", { DataProcess });
        }
    }

}