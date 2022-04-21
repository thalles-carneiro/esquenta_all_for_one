import React from 'react';
import { Routes, Route } from 'react-router-dom';

import * as Pages from '../pages';

const AppRoutes = () => (
  <Routes>
    <Route path='/' element={ <Pages.Home /> } />
    <Route path='/deck' element={ <Pages.Deck /> } />
  </Routes>
);

export default AppRoutes;
