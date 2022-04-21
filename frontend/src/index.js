import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { CardProvider, DeckProvider } from './context';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <DeckProvider>
        <CardProvider>
          <App />
        </CardProvider>
      </DeckProvider>
    </Router>
  </React.StrictMode>
);
