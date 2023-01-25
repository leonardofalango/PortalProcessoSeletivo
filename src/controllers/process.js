const user = require('../model/Candidate')
const process = require('../model/Process')


module.exports = {
    async homePageGet(req, res)
    {

        const processData = await process.findAll({
            raw: true,
            attributes: ['id','capacity']
        });

        res.render("../views/homePage", {processData});
    }



}