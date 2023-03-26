import React, { useEffect } from 'react';
import {useLocalStorage} from 'usehooks-ts';
import {useActions} from '../../hooks/useActions';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import Counter from '../../ui/Counter/Counter';
import css from './BasketItem.module.scss';

interface IBasketItem {
    image: string;
    barcode: number;
    size: string;
    sizeType: string;
    title: string;
    brand: string;
    description: string;
    price: number;
    count: number;
}

const BasketItem: React.FC<IBasketItem> = ({
    image,
    barcode,
    size,
    sizeType,
    title,
    brand,
    description,
    price,
    count,
}) => {

    const {order} = useTypedSelector(state => state.basket)
    const {items} = useTypedSelector(state => state.catalog)
    const {addToBasket, removeFromBasket} = useActions()
    const [sum, setSum] = useLocalStorage('sum', 0)

    const inc = (): void => {
        addToBasket(barcode, items, order, 1)
    }

    const dec = (): void => {
        if (count === 1) return
        addToBasket(barcode, items, order, -1)
    }

    const removeItem = (): void => {
        removeFromBasket(barcode, order)
    }

    useEffect(() => {
        setSum(sum + price * count)
    }, [])

    return(
        <div className = {css.container}>
            <div className = {css.item}>
                <div className = {css.info}>
                    <div className = {css.image}>
                        <img
                            src = {image}
                            alt = "productImage" 
                        />  
                    </div>
                    <div className = {css.text}>
                        <div className = {css.sizeType}>
                            <img
                                src = {
                                    sizeType === 'вес' ? 
                                    "/images/catalog/box.svg" : 
                                    "/images/catalog/bottle.svg"
                                }
                                alt = "sizeType" 
                            />
                            <span>
                                {size}
                            </span>
                        </div>
                        <h2>
                            {brand} {title}
                        </h2>
                        <p>
                            {description} 
                        </p>
                    </div> 
                </div>
                <div className = {css.interactive}>
                    <Counter 
                        marginRight = {88}
                        increment = {inc}
                        decrement = {dec}
                        count = {count}
                    />
                    <div className = {css.price}>
                        {price * count} ₸
                    </div>
                    <button
                        onClick={() => removeItem()}
                        className = {css.remove}
                    >
                        <img 
                            src = "/images/basket/remove.png" 
                            alt = "remove" 
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BasketItem