import React from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Navigation from './router/Navigation';
import ScrollToTop from './router/ScrollToTop';
import {BrowserRouter} from 'react-router-dom';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Header />
            <Menu />
            <Navigation />
            <Footer />
        </BrowserRouter>
    )
}

export default App
