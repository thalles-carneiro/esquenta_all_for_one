import axios from 'axios';

const HOST = 'localhost';
const PORT = process.env.PORT || 3001;

const BASE_URL = `http://${HOST}:${PORT}`;

const getDeck = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/deck`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

const getCardsBySearch = async (name, rare, trunfo) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/deck/search?name=${name}&rare=${rare}&trunfo=${trunfo}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

const insertCard = async (card) => {
  try {
    await axios.post(`${BASE_URL}/card`, { card });
  } catch (error) {
    console.error(error);
  }
};

const removeCard = async (cardId) => {
  try {
    await axios.delete(`${BASE_URL}/card/${cardId}`);
  } catch (error) {
    console.error(error);
  }
};

export {
  getDeck,
  insertCard,
  removeCard,
  getCardsBySearch,
};
