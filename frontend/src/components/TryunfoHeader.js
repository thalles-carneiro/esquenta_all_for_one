import React from 'react';
import { Link } from 'react-router-dom';
import { Title, Header, Navbar, Card } from '@mantine/core';

const TryunfoHeader = () => {
  return (
    <Header height={150} p="xs">
      <Title order={1} align="center">Tryunfo 2.0</Title>
      <Navbar align="center" height="fit-content" p="xs">
        <Card
          p={5}
          style={ { width: "fit-content", margin: "auto" } }
          component={ Link }
          to="/"
        >
          Home
        </Card>
        <Card
          style={ { width: "fit-content", margin: "auto" } }
          component={ Link }
          to="/deck"
        >
          Deck
        </Card>
      </Navbar>
    </Header>
  );
};

export default TryunfoHeader;
