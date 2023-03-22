import React from 'react';
import css from './ProductCard.module.scss';

interface ICardProps {
  title: string;
  photo: string;
  size: string;
  brand: string;
  barcode: number;
  manufacturer: string;
  price: string;
}

const ProductCard: React.FC<ICardProps> = ({
  title,
  photo,
  size,
  brand,
  barcode,
  manufacturer,
  price,
}) => {
  return (
    <div className = {css.container}>
      <div className = {css.image}>
        <img
          src = {photo} 
          alt = "product" 
        />
      </div>
      
      <div className = {css.size}>
        <img 
          src = "/images/catalog/bottle.svg" 
          alt = "type" 
        />
        <span>
          {size}
        </span>
      </div>
      <span className = {css.productName}>
        <span className = {css.brand}>
          {brand}
        </span>
        {title}
      </span>
      <div className = {css.item}>
        <span>
          Штрихкод:
        </span>
        <span className = {css.value}>
          {barcode}
        </span>
      </div>
      <div className = {css.item}>
        <span>
          Производитель: 
        </span>
        <span className = {css.value}>
          {manufacturer}
        </span>
      </div>
      <div className = {css.item}>
        <span>
          Бренд: 
        </span>
        <span className = {css.value}>
          {brand}
        </span>
      </div>
      <div className = {css.order}>
        <span>
          {price}
        </span>
        <button>
          В КОРЗИНУ
          <img 
            src = "/images/catalog/basket.png" 
            alt = "basket" 
          />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
