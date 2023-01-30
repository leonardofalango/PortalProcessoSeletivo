const Candidate = require('../model/Candidate');

module.exports = {
    async login(req, res) {
        const cand = await Candidate.findOne({
            raw: true,
            where: {
                login: req.session.user,
                password: req.session.pass
            }
        })
        return cand != null;
    },

    async loginAdm(req, res) {
        const admUser = await adm.findOne({
            raw: true,
            where: {
                login: req.session.user,
                password: req.session.pass
            }
        })
        return admUser != null;
    },
}
