var http = require('http');

var server = http.createServer(function(req, res){
    var categoria = req.url;

    if (categoria == '/tecnologia'){
        res.end("<html><body>Portal da Tecnologia</body></html>");
    }else if (categoria == '/moda'){
        res.end("<html><body>Portal da Moda</body></html>");
    }else if (categoria = '/beleza'){
        res.end('<html><body>Portal da Beleza</body></html>');
    }else {
        res.end("<html><body>Portal de Notícias</body></html>");
    }
    
}).listen(3000);