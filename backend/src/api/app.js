const express = require('express');
const cors = require('cors');

const DeckController = require('../controllers/deck');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_req, res, _next) => {
  res.send('I know you love Docker and MySQL s2!');
});

app.get('/deck', DeckController.getDeck);
app.get('/deck/search', DeckController.getCardsBySearch);

app.post('/card', DeckController.insertCard);

app.delete('/card/:id', DeckController.removeCard);

module.exports = app;
