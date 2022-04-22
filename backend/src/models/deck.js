const db = require('./db');

const getDeck = async () => {
  const query = ''; /* Insira sua query */
  const [deck] = await db.query(query);
  return deck;
};

const getCardsBySearch = async (name, rare, trunfo) => {
  const query = ''; /* Insira sua query */
  const [cardsFound] = await db.query(query, [`%${name}%`, `${rare}%`, JSON.parse(trunfo)]);
  return cardsFound;
};

const insertCard = async (card) => {
  const { name, description, attr1, attr2, attr3, image, rare, trunfo } = card;

  const query = ''; /* Insira sua query */

  await db.query(
    query,
    [name, description, attr1, attr2, attr3, image, rare, trunfo],
  );
};

const removeCard = async (cardId) => {
  const query = ''; /* Insira sua query */
  await db.query(query, [cardId]);
};

module.exports = {
  getDeck,
  insertCard,
  removeCard,
  getCardsBySearch,
};
