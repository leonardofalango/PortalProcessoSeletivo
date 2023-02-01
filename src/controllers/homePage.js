const { name } = require('ejs');
const user = require('../model/Candidate')
const process = require('../model/Process')
const relation = require('../model/CandidateXProcess')
const login = require('./login')

module.exports = {

    async homePageGet(req, res) {
        const response = await login.login(req, res)
    
        if (!response)
            res.render('../views/401')
        
        else 
        {
            const DataProcess = await process.findAll({
                attributes: ['id', 'capacity', 'details', 'phases', 'subscription_fee', 'date'],
                include: [{
                    model: job,
                    required: true,
                    attributes: ['name'] 
                }]
            });
        
            res.render("../views/homePage", { DataProcess });
        }
    }

}