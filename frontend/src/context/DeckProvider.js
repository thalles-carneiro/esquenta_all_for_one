import React, { useState } from 'react';

import DeckContext from './DeckContext';

const DeckProvider = ({ children }) => {
  const [deck, setDeck] = useState([]);

  const context = {
    deck,
    setDeck,
  };

  return (
    <DeckContext.Provider value={ context }>
      { children }
    </DeckContext.Provider>
  );
};

export default DeckProvider;
