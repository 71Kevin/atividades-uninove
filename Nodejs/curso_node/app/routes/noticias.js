// var dbConnection = require('../../config/dbConnection');
// Por conta do Consign não precisa mais da importação.

module.exports = function(app) {


     // Callback
     app.get('/noticias', function(req, res){

        const connection = app.config.dbConnection();
        const noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticias(connection, function(error, result){
            res.render("noticias/noticias.ejs", {noticias : result});
        });
        
             // res.send(result);

         // "result" é os dados que vai ser puxados do banco de dados.
         // "noticias : result" noticias é apenas um rótulo para usar posteriormente no noticias.ejs.
        
    });
};