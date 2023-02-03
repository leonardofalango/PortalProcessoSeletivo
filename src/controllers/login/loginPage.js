const user = require('../../model/Candidate')
const login = require('./login')
const { saveLogin } = require('./saveLogin')
const save = require('./saveLogin')



module.exports = {
    
    async loginEndPoint(req, res){
        await save.saveLogin(req, res)
        let response = await login.login(req, res)
        let responseAdm = await login.loginAdm(req, res)
        
        if (response)
            res.redirect('/homePage')
        
        else if (responseAdm)
            res.redirect('/AdmHomePage')

        else res.redirect('/login')
    },

    async loginAdmEndPoint(req, res) {
        await saveLogin(req, res)
        let response = await login.loginAdm(req, res)

        if (response)
            res.redirect('/AdmHomePage')
        res.redirect('/login')
    }
}