import React, { useContext, useEffect, useId } from 'react';

import { PlayingCard, Filters, TryunfoHeader } from '../components';
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
      <TryunfoHeader />
      <Filters />
      <section>
        <h2 style={ { textAlign: "center", margin: "30px" } }>Todas as cartas</h2>
        <div style={ { display: "flex", flexWrap: "wrap" } }>
          {
            deck.map((card, index) => (
              <PlayingCard
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
        </div>
      </section>
    </div>
  );
};

export default Deck;
