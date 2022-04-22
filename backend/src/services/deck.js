const DeckModel = require('../models/deck');

const getDeck = async () => {
  const deck = await DeckModel.getDeck();
  return deck;
};

const getCardsBySearch = async (name, rare, trunfo) => {
  const cardsFound = await DeckModel.getCardsBySearch(name, rare, trunfo);
  return cardsFound;
};

const insertCard = async (card) => {
  await DeckModel.insertCard(card);
};

const removeCard = async (cardId) => {
  await DeckModel.removeCard(cardId);
};

module.exports = {
  getDeck,
  insertCard,
  removeCard,
  getCardsBySearch,
};
