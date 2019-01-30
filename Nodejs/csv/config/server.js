const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');
//"views" é o diretorio de views padrão do Express, onde ele vai pesquisar as views | Local das views.

module.exports = app;

//Exportação dos Módulos Express e ejs para o app.js.