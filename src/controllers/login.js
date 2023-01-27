const Candidate = require('../model/Candidate');

module.exports = {
    async login(req, res) {
        const cand = await Candidate.findOne({
            raw: true,
            where: {login: req.session.user}
        })
        console.log("<candidate>");
        console.log(cand)
        console.log("</candidate>")
        return cand != null;
    },
}
