const user = require('../model/Candidate')
const crypto = require('crypto')

module.exports = {
    async getLandingPage(req, res){
        console.log(req.session)
        res.render('../views/index');
    },

    async getLogin(req, res){
        res.render('../views/signin')
    },
    
    async postSignUp(req, res){
        const data = req.body

        const userData = [data.name, data.login, data.password]
        if (userData[0] || userData[1] || userData[2])
            res.render('../views/signup', {userData})
        console.log(userData);
        
        res.render('../views/signup', {userData : ['', '', '']});
    },



    async register(req, res){
        const data = req.body

        console.log(data.password)
        let hash = crypto.createHash('md5').update(data.password).digest('hex')

        await user.create({
            name : data.name,
            login : data.logIn,
            password : hash,
            profile_pic : data.profile_pic,
            birthdate : data.birthdate,
            address : data.address,
            cpf : data.cpf,
            curriculum : data.curriculum
        })
        res.render('/')
    },
}