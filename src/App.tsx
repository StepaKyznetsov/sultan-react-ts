import React from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';

import Router from './router/router';

const App: React.FC = () => {
    return (
        <>
            <Header />
            <Menu />
            <Router />
            <Footer />
        </>
    )
}

export default App
