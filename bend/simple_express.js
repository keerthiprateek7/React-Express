require('dotenv').config();

var express = require('express');
var cors = require('cors');
var app = express();

var port = 9000;

app.use(cors());

app.use(express.static('public'));

/*
app.get('/api/players', (request, response) => {
  console.log('players...', JSON.stringify(players));
  response.setHeader('Content-Type', 'application/json');
  response.send(JSON.stringify(players));
});
*/

app.get('/', (request, response) => {
  //console.log('players...', JSON.stringify(players));
  response.setHeader('Content-Type', 'text/html');
  response.send('<div>Hello there, welcome Prateek</div>');
});

app.use('/api/players', require('./Player'));

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
