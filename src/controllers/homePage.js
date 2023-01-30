const { name } = require('ejs');
const user = require('../model/Candidate')
const process = require('../model/Process')
const job = require('../model/Jobs')
const relation = require('../model/CandidateXProcess')

module.exports = {

    async homePageGet(req, res) {

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