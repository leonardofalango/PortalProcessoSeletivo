const user = require('../model/Candidate')
const login = require('./login')
const save = require('./saveLogin')

module.exports = {
    
    async loginEndPoint(req, res){
        await save.saveLogin(req, res)
        let response = await login.login(req, res)

        console.log(response)
        res.redirect('/login')
    },
}