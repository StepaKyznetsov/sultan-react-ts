import React from 'react';
import Banner from './components/Banner/Banner';
import Categories from './components/Categories/Categories';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Menu />
      <Banner />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
