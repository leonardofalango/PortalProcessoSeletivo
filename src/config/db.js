const sequelize = require('sequelize');
//configurações da base de dados
const database = new sequelize('take4', 'AulaJS', 'J@SqL0123_QWE',
{
    dialect: 'mssql', host:'localhost', port: 49721
});
database.sync();
module.exports = database;

// dialect: 'mssql', host:'localhost', port: 49721
