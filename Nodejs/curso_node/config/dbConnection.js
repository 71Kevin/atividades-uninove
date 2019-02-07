const mysql = require('mysql');

const connMySQL = function(){
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'root',
        database : 'portal_noticias'
    });
}; 

module.exports = function(){
    console.log('O autoload carregou o módulo de conexão com bd');
    return connMySQL;
};