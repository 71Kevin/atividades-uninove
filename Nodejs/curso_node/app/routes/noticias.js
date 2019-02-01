var dbConnection = require('../../config/dbConnection');

module.exports = function(app) {

    connection = dbConnection();

    app.get('/noticias', function(req, res){

        connection.query('select * from noticias', function(error, result){
            res.render("noticias/noticias.ejs", {noticias : result});
            // res.send(result);

        // "result" é os dados que vai ser puxados do banco de dados.
        // "noticias : result" noticias é apenas um rótulo para usar posteriormente no noticias.ejs.
        });
    });
};