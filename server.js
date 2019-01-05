const express = require('express');
const app = express();

app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.listen(3000, function() {
    console.log('servidor escutando porta 3000');
})

app.get('/', function(request, response){
    response.send('<h1>ola express start</h1>')
})

app.get('/livros', function (request, response) {

    response.setHeader('Content-Type','application/json')

    let resposta = JSON.stringify({livros: `olá ç hehe`})

    response.render('./src/views/produtos/lista')
    
})


// const app = require('http');


// const servidor = app.createServer(function(request, response){
    
//     if(request.url == '/'){
        
//         response.end('<h1>ola</h1>')
//     }

//     if(request.url == '/livros'){
//         response.end('<h1>livros</h1>')
//     }

// });

// servidor.listen(3000);