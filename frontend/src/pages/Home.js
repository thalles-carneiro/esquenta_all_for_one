import React from 'react';
import { Link } from 'react-router-dom';

import { Form, Card } from '../components';

const Home = () => (
  <div>
    <header>
      <h1>Tryunfo 2.0</h1>
      <nav>
        <Link to="/deck">Deck</Link>
      </nav>
    </header>
    <section>
      <div><Form /></div>
      <div><Card /></div>
    </section>
  </div>
);

export default Home;
