import React from 'react';
import css from './ProductCard.module.scss';
import {useNavigate} from 'react-router-dom';
import {CATALOG} from '../../constants/constants';
import {useTypedSelector} from "../../hooks/useTypedSelector";
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
    sizeType: string;
}

const ProductCard: React.FC<ICardProps> = ({
    title,
    photo,
    size,
    brand,
    barcode,
    manufacturer,
    price,
    sizeType
}) => {

    const navigate = useNavigate()
    const {getProductById, addToBasket} = useActions()
    const {items} = useTypedSelector(state => state.catalog)
    const [sum, setSum] = useLocalStorage('sum', 0)
    const {order} = useTypedSelector(state => state.basket)

    const productPage = (id: number, items: any[]): void => {
        navigate(CATALOG + '/' + id)
        getProductById(id, items)
    }

    const addToCart = (items: any[]): void => {
      addToBasket(barcode, items, order, 1)
      setSum(+((sum + price).toFixed(2)))
    }

    const characteristicsOnCard = [
        {name: 'Штрихкод:', value: barcode},
        {name: 'Производитель:', value: manufacturer},
        {name: 'Бренд:', value: brand},
    ]

    return (
        <div className = {css.container}>
            <div
                onClick={() => productPage(barcode, items)}
                className = {css.image}
            >
                <img
                    src = {photo} 
                    alt = "product"
                />
            </div>
            <div className = {css.size}>
                <img 
                    src = {sizeType === 'вес' ? "/images/catalog/box.svg" : "/images/catalog/bottle.svg"}
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
            {characteristicsOnCard.map(e => 
                <div className = {css.item}>
                    <span>
                        {e.name}
                    </span>
                    <span className = {css.value}>
                        {e.value}
                    </span>
                </div>
            )}
            <div className = {css.order}>
                <span>
                    {price} ₸
                </span>
                <button onClick={() => addToCart(items)}>
                    В КОРЗИНУ
                    <img
                        className = {css.cart}
                        src = "/images/catalog/basket.png" 
                        alt = "basket" 
                    />
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
