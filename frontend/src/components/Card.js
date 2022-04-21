import React, { useContext } from 'react';

import { CardContext, DeckContext } from '../context';
import { getDeck, removeCard } from '../services/deckAPI';

const Card = (props) => {
  const { card } = useContext(CardContext);
  const { setDeck } = useContext(DeckContext);

  const {
    id,
    name,
    description,
    attr1,
    attr2,
    attr3,
    image,
    rare,
    trunfo,
    btn } = Object.keys(props).length ? props : card;

  const onRemoveButtonClick = () => {
    (async () => {
      await removeCard(id);
      setDeck(await getDeck());
    })();
  };

  return (
    <section>
      <div>
        <h3>{ name }</h3>
        <img src={ image } alt={ name }/>
        <p>{ description }</p>
        <p>{ attr1 }</p>
        <p>{ attr2 }</p>
        <p>{ attr3 }</p>
        <p>{ rare }</p>
        {
          trunfo && <span>Super Trunfo</span>
        }
      </div>

      {
        btn && (
          <button
            type="button"
            onClick={ onRemoveButtonClick }
          >
            Excluir
          </button>
        )
      }
    </section>
  );
};

export default Card;
