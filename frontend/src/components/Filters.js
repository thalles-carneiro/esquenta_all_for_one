import React, { useContext, useState } from 'react';

import { DeckContext } from '../context';
import { getDeck, getCardsBySearch } from '../services/deckAPI';

const Filters = () => {
  const [name, setName] = useState('');
  const [rare, setRare] = useState('');
  const [trunfo, setTrunfo] = useState(false);

  const { setDeck } = useContext(DeckContext);

  const handleFiltersSubmit = (event) => {
    event.preventDefault();
    (async () => setDeck(await getCardsBySearch(name, rare, trunfo)))();
  };

  const resetFilters = () => {
    (async () => setDeck(await getDeck()))();

    setName('');
    setRare('');
    setTrunfo(false);
  };

  return (
    <form onSubmit={ handleFiltersSubmit }>
      <label htmlFor="nameFilter">
        Nome da carta
        <input
          id="nameFilter"
          type="text"
          value={ name }
          disabled={ trunfo }
          onChange={ ({ target: { value } }) => setName(value) }
        />
      </label>
      <label htmlFor="rareFilter">
        Raridade
        <select
          id="rareFilter"
          type="text"
          value={ rare }
          disabled={ trunfo }
          onChange={ ({ target: { value } }) => setRare(value) }
        >
          <option value="" >todas</option>
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
      </label>
      <label htmlFor="trunfoFilter">
        Super Trunfo
        <input
          id="trunfoFilter"
          type="checkbox"
          value={ trunfo }
          onChange={ ({ target: { checked } }) => setTrunfo(checked) }
        />
      </label>
      <button type="submit">
        Filter
      </button>
      <button
        type="button"
        onClick={ resetFilters }
      >
        Reset Filters
      </button>
    </form>
  );
};

export default Filters;
