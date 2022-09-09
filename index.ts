import express = require('express');
import bodyParser = require('body-parser');
const app = express();
import db = require('./queries');
const port :number= 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Petite Api avec Node.js, Express, Postgres(hébergé sur le cloud), permettant de faire un crud sur la table users' })
  })

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

  app.listen(port, () => {
    console.log(`⚡️[server] :l'api tourne sur le port : http://localhost:${port}.`)
  })