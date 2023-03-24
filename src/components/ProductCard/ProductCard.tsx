import React from 'react';
import css from './ProductCard.module.scss';
import {useNavigate} from 'react-router-dom';
import {CATALOG} from '../../constants/constants';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {getProductById} from "../../store/action-creators/product";
import {useActions} from "../../hooks/useActions";
import {useLocalStorage} from 'usehooks-ts';

interface ICardProps {
    title: string;
    photo: string;
    size: string;
    brand: string;
    barcode: number;
    manufacturer: string;
    price: number;
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

    const navigate = useNavigate()
    const {getProductById} = useActions()
    const {items} = useTypedSelector(state => state.catalog)
    const [sum, setSum] = useLocalStorage('sum', 0)
    const [products, setProducts] = useLocalStorage('products', 0)

    const productPage = (id: number, items: any[]): void => {
        navigate(CATALOG + '/' + id)
        getProductById(id, items)
    }

    const addToCart = (id: number, items: any[]): void => {
      getProductById(id, items)
      setProducts(products + 1)
      setSum(+((sum + price).toFixed(2)))
    }

    return (
        <div className = {css.container}>
            <div
                onClick={() => productPage(barcode, items)}
                className = {css.image}>
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
        <span
            onClick={() => productPage(barcode, items)}
            className = {css.productName}
        >
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
                {price} ₸
            </span>
            <button onClick={() => addToCart(barcode, items)}>
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
