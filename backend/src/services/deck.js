const DeckModel = require('../models/Deck');

const getDeck = async () => {
  const deck = await DeckModel.getDeck();
  return deck;
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
};
