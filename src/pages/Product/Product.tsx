import React from 'react';
import ProductPage from '../../components/ProductPage/ProductPage';
import {useTypedSelector} from "../../hooks/useTypedSelector";

const Product: React.FC = () => {
  
  const {current} = useTypedSelector(state => state.product)
  let currentProduct = JSON.parse(JSON.stringify(current))[0]
  
  return (
    <>
      <ProductPage
        sizeType = {currentProduct.sizeType}
        photo = {currentProduct.photo}
        title = {currentProduct.title}
        size = {currentProduct.size}
        barcode = {currentProduct.barcode}
        manufacturer = {currentProduct.manufacturer}
        brand = {currentProduct.brand}
        price = {currentProduct.price}
        description = {currentProduct.description}
      />
    </>
  );
}

export default Product;
