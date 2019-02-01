module.exports = function(app){
    app.get('/formulario_inclusao_noticia', function(req, res){
        res.render("admin/form_add_noticia.ejs");
    });
};

//Essa Function pode ser vista também como uma classe Void. O mesmo vale para noticias.js e home.js.