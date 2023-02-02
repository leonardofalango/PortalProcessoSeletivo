const Candidate = require('../model/Candidate');
const adm = require('../model/Adm');
const saveLogin = require('./saveLogin');

module.exports = {
    async login(req, res) {
        const cand = await Candidate.findOne({
            raw: true,
            where: {
                login: req.session.user,
                password: req.session.pass
            }
        })
        return cand !== null;
    },

    async loginAdm(req, res) {
        const admUser = await adm.findOne({
            raw: true,
            where: {
                login: req.session.user,
                password: req.session.pass
            }
        })
        return admUser !== null;
    },

    async returnUser(req, res) {
        const user = await Candidate.findOne({
            raw: true,
            where: {
                login: req.session.user,
                password: req.session.pass
            }
        })
        return user;
    },

    async disconnect(req, res) {
        saveLogin.unsaveLogin(req, res)
        res.redirect('/')
    }
}
