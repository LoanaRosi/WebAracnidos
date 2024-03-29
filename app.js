const express = require('express');
const app = express();
const port = 3030;
const path = require('path')

app.use(express.static('public'));


app.get('/',(req,res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));
app.get('/spiders', (req, res) => res.sendFile(path.join(__dirname, 'views', 'spiders.html')));
app.get('/adicional', (req, res) => res.sendFile(path.join(__dirname, 'views', 'adicional.html')));

app.listen(port,() => console.log('Servidor corriendo en http://localhost:' + port))



