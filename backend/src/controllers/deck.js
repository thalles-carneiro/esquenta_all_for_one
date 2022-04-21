const rescue = require('express-rescue');
const { StatusCodes } = require('http-status-codes');

const DeckService = require('../services/deck');

const getDeck = rescue(async (_req, res, _next) => {
  const deck = await DeckService.getDeck();
  return res.status(StatusCodes.OK).json(deck);
});

const insertCard = rescue(async (req, res, _next) => {
  const { card } = req.body;
  await DeckService.insertCard(card);
  return res.status(StatusCodes.CREATED).json({ message: 'Card created successfully!' });
});

const removeCard = rescue(async (req, res, _next) => {
  const { cardId } = req.body;
  await DeckService.removeCard(cardId);
  return res.status(StatusCodes.NO_CONTENT).json({ message: 'Card removed successfully!' });
});

module.exports = {
  getDeck,
  insertCard,
  removeCard,
};
