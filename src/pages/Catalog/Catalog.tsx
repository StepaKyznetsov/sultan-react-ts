import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import ProductCard from '../../components/ProductCard/ProductCard';
import ProductList from '../../components/ProductList/ProductList';

const Catalog: React.FC = () => {
  return (
    <div>
      <Header />
      <Menu />
      <ProductList />
      <Footer />
    </div>
  );
}

export default Catalog;
