const user = require('../model/Candidate')
const crypto = require('crypto');
const Candidate = require('../model/Candidate');
const log = require('../controllers/login')

module.exports = {
    async saveLogin(req, res){
        const body = req.body

        req.session.user = body.user
        let hash = crypto.createHash('md5').update(body.password).digest('hex')
        req.session.pass = hash
    }
}