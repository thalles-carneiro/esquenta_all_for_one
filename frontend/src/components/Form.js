import React, { useContext } from 'react';

import {
  TextInput,
  Textarea,
  NativeSelect,
  Checkbox,
  Button,
  Text,
  Container,
  Group } from '@mantine/core';

import { insertCard } from '../services/deckAPI';
import { CardContext, DeckContext } from '../context';
import { validateInputs, validateSuperTrunfo } from '../helpers';

const Form = () => {
  const { card, onInputChange, resetCard } = useContext(CardContext);
  const { deck } = useContext(DeckContext);

  const isSaveButtonDisabled = validateInputs(card);

  const hasTrunfo = validateSuperTrunfo(deck);

  const onSaveButtonClick = async () => {
    await insertCard(card);
    resetCard();
  };

  return (
    <Container style={ { display: "flex", flexDirection: "column", gap: "20px", width: "60%" } }>
      <TextInput
        placeholder="Insert card name"
        name="name"
        label="Name"
        radius="md"
        size="md"
        value={ card.name }
        onChange={ onInputChange }
        required
      />
      <Textarea
        placeholder="Insert card description"
        name="description"
        label="Description"
        radius="md"
        size="md"
        value={ card.description }
        onChange={ onInputChange }
        required
      />
      <Group position="apart">
        <TextInput
          placeholder="Insert card attr1"
          name="attr1"
          label="Attr1"
          radius="md"
          size="md"
          type="number"
          min={0}
          max={90}
          value={ card.attr1 }
          onChange={ onInputChange }
          required
        />
        <TextInput
          placeholder="Insert card attr2"
          name="attr2"
          label="Attr2"
          radius="md"
          size="md"
          type="number"
          min={0}
          max={90}
          value={ card.attr2 }
          onChange={ onInputChange }
          required
        />
        <TextInput
          placeholder="Insert card attr3"
          name="attr3"
          label="Attr3"
          radius="md"
          size="md"
          type="number"
          min={0}
          max={90}
          value={ card.attr3 }
          onChange={ onInputChange }
          required
        />
      </Group>

      <TextInput
        placeholder="Insert card image link"
        name="image"
        label="Image"
        radius="md"
        size="md"
        value={ card.image }
        onChange={ onInputChange }
        required
      />

      <NativeSelect
        data={['Normal', 'Raro', 'Muito raro']}
        placeholder="Insert card rarity"
        name="rare"
        label="Rare"
        radius="md"
        size="md"
        value={ card.rare }
        onChange={ onInputChange }
        required
      />

      <Group position="center">
        {
          hasTrunfo
            ? (<Text>Você já tem um Super Tryunfo em seu baralho</Text>)
            : (
              <Checkbox
                label="Super Tryunfo"
                name="trunfo"
                radius="md"
                size="md"
                checked={ card.trunfo }
                onChange={ onInputChange }
              />
            )
        }
        <Button
          variant="outline"
          radius="md"
          size="md"
          uppercase
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Save
        </Button>
      </Group>
    </Container>
  );
};

export default Form;
