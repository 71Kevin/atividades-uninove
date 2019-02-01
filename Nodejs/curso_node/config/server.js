const express = require('express');
const app = express();
const consign = require('consign');
// Consign facilita na hora de importar algum módulo.

// view engine = cada view vai ser processada (código javascript também) e vai ser 
// interpretada formando um html completo e enviado para quem fez a requisição.
app.set('view engine', 'ejs');
app.set('views', './app/views');
// "views" é o diretorio de views padrão do Express, onde ele vai pesquisar as views | Local das views.

consign().include('app/routes').into(app);
// Com isso não precisa mais fazer as importações na classe app.js, apenas a dessa (server.js).

module.exports = app;
//Exportação dos Módulos Express e ejs para o app.js.