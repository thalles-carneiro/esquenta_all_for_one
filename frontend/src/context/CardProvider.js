import React, { useState } from 'react';

import CardContext from '../context/CardContext';

const CARD_INITIAL_STATE = {
  name: '',
  description: '',
  attr1: '0',
  attr2: '0',
  attr3: '0',
  image: '',
  rare: 'normal',
  trunfo: false,
};

const CardProvider = ({ children }) => {
  const [card, setCard] = useState(CARD_INITIAL_STATE);

  const onInputChange = ({ target }) => {
    const { type, name } = target;
    const value = (type === 'checkbox') ? target.checked : target.value;

    setCard((prevCard) => ({ ...prevCard, [name]: value }));
  };

  const resetCard = () => setCard(CARD_INITIAL_STATE);

  const context = {
    card,
    onInputChange,
    resetCard,
  };

  return (
    <CardContext.Provider value={ context }>
      { children }
    </CardContext.Provider>
  );
};

export default CardProvider;
