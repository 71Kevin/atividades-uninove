//Classe principal do projeto, onde puxa os atributos das outras classes.

const app = require('./config/server.js');

var rotaNoticias = require('./app/routes/noticias.js')(app);

var rotaHome = require('./app/routes/home.js')(app);

var formInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);

//Para usar o módulo precisa passar algum parametro por ela. | No caso, passando o "app" para ser usado

app.listen(3000, function(){
    console.log("Servidor ON");
});