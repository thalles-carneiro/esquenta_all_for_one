import React, { useContext, useState } from 'react';

import {
  TextInput,
  NativeSelect,
  Checkbox,
  Button,
  Container,
  Group } from '@mantine/core';

import { DeckContext } from '../context';
import { getDeck, getCardsBySearch } from '../services/deckAPI';

const Filters = () => {
  const [name, setName] = useState('');
  const [rare, setRare] = useState('');
  const [trunfo, setTrunfo] = useState(false);

  const { setDeck } = useContext(DeckContext);

  const handleFilters = () => {
    (async () => setDeck(await getCardsBySearch(name, rare, trunfo)))();
  };

  const resetFilters = () => {
    (async () => setDeck(await getDeck()))();

    setName('');
    setRare('');
    setTrunfo(false);
  };

  return (
    <Container style={ { display: "flex", flexDirection: "column", gap: "20px" } }>
      <Group position="center">
        <TextInput
          placeholder="Search by card name"
          label="Name"
          radius="md"
          size="md"
          value={ name }
          onChange={ ({ target: { value } }) => setName(value) }
        />
        <NativeSelect
          data={[{ value: '', label: 'Todas' }, 'Normal', 'Raro', 'Muito raro']}
          label="Rare"
          radius="md"
          size="md"
          value={ rare }
          onChange={ ({ target: { value } }) => setRare(value) }
        />
      </Group>

      <Group position="center">
        <Checkbox
          label="Super Tryunfo"
          radius="md"
          size="md"
          checked={ trunfo }
          onChange={ ({ target: { checked } }) => setTrunfo(checked) }
        />
      </Group>

      <Group position="center">
        <Button
          variant="outline"
          radius="md"
          size="sm"
          uppercase
          onClick={ handleFilters }
        >
          Filter
        </Button>

        <Button
          variant="outline"
          radius="md"
          size="sm"
          uppercase
          onClick={ resetFilters }
        >
          Reset Filters
        </Button>
      </Group>
    </Container>
  );
};

export default Filters;
