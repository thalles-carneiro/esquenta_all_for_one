import React, { useContext, useEffect, useId } from 'react';
import { Link } from 'react-router-dom';

import { Card, Filters } from '../components';
import { DeckContext } from '../context';
import { getDeck } from '../services/deckAPI';

const Deck = () => {
  const idInDeckPage = useId();
  const { deck, setDeck } = useContext(DeckContext);

  useEffect(() => {
    (async () => setDeck(await getDeck()))();
  }, [setDeck]);

  return (
    <div>
      <header>
        <h3>Todas as cartas</h3>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <Filters />
      <section>
        {
          deck.map((card, index) => (
            <Card
              key={ idInDeckPage + index }
              id={ card.id }
              name={ card.name }
              description={ card.description }
              attr1={ card.attr1 }
              attr2={ card.attr2 }
              attr3={ card.attr3 }
              image={ card.image }
              rare={ card.rare }
              trunfo={ card.trunfo }
              btn
            />
          ))
        }
      </section>
    </div>
  );
};

export default Deck;
