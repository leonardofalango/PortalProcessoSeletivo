const user = require('../../model/Candidate')
const adm = require('../../model/Adm')
const crypto = require('crypto')

module.exports = {
    async getLandingPage(req, res){
        console.log(req.session)
        res.render('../views/index');
    },

    async getLogin(req, res){
        res.render('../views/login/signin')
    },
    
    async postSignUp(req, res){
        const data = req.body

        const userData = [data.name, data.login, data.email]
        if (userData[0] || userData[1] || userData[2])
        res.render('../views/login/register', {userData})
        else{
        res.render('../views/login/register', {userData : ['', '', '']});
        }
    },



    async register(req, res){
        const data = req.body

        let hash = crypto.createHash('md5').update(data.pass).digest('hex')

        let foto = 'defaultProfilePicM.png';
        // Verificando se foi enviada alguma foto
        if (req.files[0]) {
            // Pegar novo nome da foto
            foto = req.files[0].filename;
        }

        if (req.files[1]) {
            // Pegar novo nome da foto
            curriculum = req.files[1].filename;
        }


        await user.create({
            login : data.logIn,
            password : hash,
            name : data.name,
            profile_pic : foto,
            birthdate : data.birthdate,
            address : data.address,
            cpf : data.cpf,
            curriculum : curriculum,
            email: data.email,
        })
        res.redirect('/')
    },


    async registerAdm(req, res){
        const data = req.body

        console.log(data);
        let hash = crypto.createHash('md5').update(data.pass).digest('hex')

        await adm.create({
            name : data.name,
            login : data.logIn,
            email: data.email,
            password : hash,
            profile_pic : data.profile_pic,
            birthdate : data.birthdate,
            address : data.address,
            cpf : data.cpf,
        })
        res.redirect('/AdmHomePage')
    },
}