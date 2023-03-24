import React from 'react';
import Catalog from './pages/Catalog/Catalog';
import Main from './pages/Main/Main';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {ADMIN, BASKET, CATALOG, MAIN} from './constants/constants';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Product from './pages/Product/Product';
import Basket from './pages/Basket/Basket';
import Admin from './pages/Admin/Admin';

const App: React.FC = () => {
  return (
      <BrowserRouter>
        <Header />
        <Menu />
        <Routes>
          <Route path = {MAIN} element = {<Main />} />
          <Route path = {CATALOG} element = {<Catalog />} />
          <Route path = {CATALOG + '/:id'} element = {<Product />} />
          <Route path = {BASKET} element = {<Basket />} />
          <Route path = {ADMIN} element = {<Admin />} />
          <Route path = "*" element = {<Navigate replace to = {MAIN} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
