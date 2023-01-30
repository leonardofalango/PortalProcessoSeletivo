const Candidate = require('../model/Candidate');
<<<<<<< HEAD
const adm = require('../model/Adm');
=======
>>>>>>> c19ed54a227f99e8813ff7e64b149d29fec50fd3

module.exports = {
    async login(req, res) {
        const cand = await Candidate.findOne({
            raw: true,
<<<<<<< HEAD
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
=======
            where: {login: req.session.user}
        })
        console.log("<candidate>");
        console.log(cand)
        console.log("</candidate>")
        return cand != null;
    },
>>>>>>> c19ed54a227f99e8813ff7e64b149d29fec50fd3
}
