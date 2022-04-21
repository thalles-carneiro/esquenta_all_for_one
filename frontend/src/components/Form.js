import React, { useContext } from 'react';

import Input from './Input';
import { insertCard } from '../services/deckAPI';
import { CardContext, DeckContext } from '../context';
import { validateInputs, validateSuperTrunfo } from '../helpers';

const Form = () => {
  const { card, onInputChange, resetCard } = useContext(CardContext);
  const { deck } = useContext(DeckContext);

  const {
    name,
    description,
    attr1,
    attr2,
    attr3,
    image,
    rare,
    trunfo } = card;

  const isSaveButtonDisabled = validateInputs(card);

  const hasTrunfo = validateSuperTrunfo(deck);

  const onSaveButtonClick = async () => {
    await insertCard(card);
    resetCard();
  };

  return (
    <form>
      <Input
        label="Nome"
        name="name"
        value={ name }
        callback={ onInputChange }
      />
      <label htmlFor="description">
        Descrição
        <textarea
          name="description"
          value={ description }
          onChange={ onInputChange }
        />
      </label>
      <Input
        label="Attr01"
        name="attr1"
        type="number"
        value={ attr1 }
        callback={ onInputChange }
      />
      <Input
        label="Attr02"
        name="attr2"
        type="number"
        value={ attr2 }
        callback={ onInputChange }
      />
      <Input
        label="Attr03"
        name="attr3"
        type="number"
        value={ attr3 }
        callback={ onInputChange }
      />
      <Input
        label="Imagem"
        name="image"
        value={ image }
        callback={ onInputChange }
      />
      <label htmlFor="rare">
        <select
          name="rare"
          value={ rare }
          onChange={ onInputChange }
        >
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
      </label>
      {
        hasTrunfo
          ? (<span>Você já tem um Super Trunfo em seu baralho</span>)
          : (
            <label htmlFor="trunfo">
              Super Trybe Trunfo
              <input
                name="trunfo"
                type="checkbox"
                checked={ trunfo }
                onChange={ onInputChange }
              />
            </label>
          )
      }
      <input
        type="button"
        value="Salvar"
        disabled={ isSaveButtonDisabled }
        onClick={ onSaveButtonClick }
      />
    </form>
  );
};

export default Form;
