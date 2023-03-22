import React from 'react';
import Catalog from './pages/Catalog/Catalog';
import Main from './pages/Main/Main';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CATALOG, MAIN } from './constants/constants';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = {MAIN} element = {<Main />} />
        <Route path = {CATALOG} element = {<Catalog />} />
        <Route path = "*" element = {<Navigate replace to = {MAIN} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
