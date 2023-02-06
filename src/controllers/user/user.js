const Candidate = require('../../model/Candidate');
const login = require('../login/login')

module.exports = {
    async userPage(req, res) {

        // Inserir o login antes
            const user = await Candidate.findByPk(req.params.id, {
                raw: true
            })
            if (user === null)
                res.redirect("404")
            else {
                let sentece = user.name.split(" ")
                let realName = []
                
                sentece.forEach(element => {
                    realName.push(element[0].toUpperCase() + element.substr(1))
                });
                realName = realName.join(" ")
                user.name = realName
                res.render("../views/user/user", { user })
            }
    }
}
