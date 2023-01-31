const login = require('./login')
const process = require('../model/Process');
const job = require('../model/Jobs')


module.exports = {
    async processDetailsGet(req, res) {

        if (login) {
            const processo = await process.findByPk(req.params.id, {
                raw: true,
                attributes: ['id', 'capacity', 'details', 'phases', 'subscription_fee', 'date'],
                include: [{
                    raw: true,
                    model: job,
                    required: true,
                    attributes: ['name'] 
                }]
            })

            res.render('../views/processDetails', {processo});
        }

        else
            res.redirect("/")
    }

}
