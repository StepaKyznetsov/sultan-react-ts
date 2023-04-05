import React from 'react';
import Catalog from './pages/Catalog/Catalog';
import {Routes, Route, Navigate, BrowserRouter} from 'react-router-dom';
import {ADMIN, BASKET, CATALOG} from './constants';
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
                <Route path = {CATALOG} element = {<Catalog />} />
                <Route path = {CATALOG + '/:id'} element = {<Product />} />
                <Route path = {BASKET} element = {<Basket />} />
                <Route path = {ADMIN} element = {<Admin />} />
                <Route path = "*" element = {<Navigate replace to = {CATALOG} />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App;
