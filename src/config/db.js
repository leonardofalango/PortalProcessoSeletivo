const sequelize = require('sequelize');
//configurações da base de dados
const database = new sequelize('LeoF', 'Falango', '154256852154256852', {
    dialect: 'mssql', host:'localhost', port: 50181
});
database.sync();
module.exports = database;
