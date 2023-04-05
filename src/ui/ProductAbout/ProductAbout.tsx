import React, {useState} from 'react';
import css from './ProductAbout.module.scss';
import Counter from '../../ui/Counter/Counter';
import {useLocalStorage} from 'usehooks-ts';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {useActions} from '../../hooks/useActions';
import {decrement, increment} from '../../utils';

interface IProductAbout {
    brand: string;
    title: string;
    sizeType: string;
    size: string;
    price: number;
    barcode: number;
}

const ProductAbout: React.FC<IProductAbout> = ({
    brand,
    title,
    sizeType,
    size,
    price,
    barcode
}) => {

    const [sum, setSum] = useLocalStorage('sum', 0)
    const {addToBasket} = useActions()
    const {items} = useTypedSelector(state => state.catalog)
    const {order} = useTypedSelector(state => state.basket)
    const [counter, setCounter] = useState(1)

    const addToCart = (): void => {
        setSum(sum + counter * price)
        addToBasket(barcode, items, order, counter)
        setCounter(1)
    }

    return(
        <div className = {css.about}>
            <span className = {css.stock}>
                В наличии
            </span>
            <div className = {css.name}>
                <span className = {css.brand}>
                    {brand}
                </span>
                <span className = {css.title}>
                    {title}
                </span>
            </div>
            <div className = {css.weight}>
                <img 
                    src = {
                        sizeType === 'вес' ? 
                        '/images/catalog/box.svg' : 
                        '/images/catalog/bottle.svg'
                    }  
                    alt = "type" 
                />
                <span className = {css.value}>
                    {size}
                </span>
            </div>
            <div className = {css.interaction}>
                <span className = {css.price}>
                    {price} ₸
                </span>
                <Counter
                    styles = ''
                    marginRight = {0}
                    increment = {() => increment(counter, setCounter)}
                    decrement = {() => decrement(counter, setCounter)}
                    count = {counter}
                />
                <div onClick={() => addToCart()}>
                    <button
                        className = {css.priceButton}
                    >
                        В корзину
                        <img
                            src = "/images/catalog/basket.png"
                            alt = "download"
                        />
                    </button>
                </div>
            </div>
            <div className = {css.more}>
                <div className = {css.share}>
                    <img
                        src = "/images/product/share.png" 
                        alt = "share" 
                    />
                </div>
                <div className = {css.promotion}>
                    При покупке от 10 000 ₸ бесплатная<br />
                    доставка по Кокчетаву и области
                </div>
                <button className = {css.priceList}>
                    Прайс-лист
                    <img
                        src = "/images/product/download.png" 
                        alt = "download" 
                    />
                </button>
            </div>
        </div>
    )
}

export default ProductAbout