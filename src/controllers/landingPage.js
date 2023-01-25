const user = require('../model/Candidate')
const crypto = require('crypto')

module.exports = {
    async getLandingPage(req, res){
        res.render('../views/index');
    },
    
    async getSignUp(req, res){
        const data = req.body

        const userData = [data.name, data.login, data.password]
        console.log(userData);
        
        res.render('../views/signup', {data});
    },


    async register(req, res){
        const data = req.body

        console.log(data.password)
        let hash = crypto.createHash('md5').update(data.password).digest('hex')

        await user.create({
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