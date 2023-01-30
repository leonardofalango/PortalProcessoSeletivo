const login = require('./login')


module.exports = {
    async processDetailsGet(req, res){
        if (login)
            res.render('../views/processDetails');
        res.redirect("/")
    }
    
}