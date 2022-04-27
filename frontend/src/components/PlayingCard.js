import React, { useContext } from 'react';
import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';

import { CardContext, DeckContext } from '../context';
import { getDeck, removeCard } from '../services/deckAPI';

const PlayingCard = (props) => {
  const { card } = useContext(CardContext);
  const { setDeck } = useContext(DeckContext);

  const theme = useMantineTheme();

  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];

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
    <Card shadow="sm" p="lg" style={ { width: "250px", height: "450px", margin: "auto" } }>
      <Card.Section>
        <Text align="center">{ name }</Text>
        <Image src={ image } height={250} alt={ name } />
      </Card.Section>

      <Group position="center" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
        <Badge color="green" variant="light">
          { rare }
        </Badge>
        {
          trunfo && (
            <Badge color="red" variant="light">
              Super Tryunfo
            </Badge>
          )
        }
      </Group>

      <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
        <Text>{ attr1 }</Text>
        <Text>{ attr2 }</Text>
        <Text>{ attr3 }</Text>
      </Group>

      <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5, overflowWrap: "break-word" }}>
        { description }
      </Text>

      {
        btn && (
          <Button
            type="button"
            variant="light"
            color="red"
            fullWidth style={{ marginTop: 14 }}
            onClick={ onRemoveButtonClick }
          >
            Excluir
          </Button>
        )
      }
    </Card>
  );
};

export default PlayingCard;
