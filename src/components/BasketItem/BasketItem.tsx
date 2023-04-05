import React from 'react';
import {useLocalStorage} from 'usehooks-ts';
import {useActions} from '../../hooks/useActions';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import Counter from '../../ui/Counter/Counter';
import css from './BasketItem.module.scss';
import {CATALOG} from "../../constants";
import {useNavigate} from "react-router-dom";

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

    const navigate = useNavigate()
    const {order} = useTypedSelector(state => state.basket)
    const {items} = useTypedSelector(state => state.catalog)
    const {addToBasket, removeFromBasket, getProductById} = useActions()
    const [sum, setSum] = useLocalStorage('sum', 0)

    
    const dec = (): void => {
        if (count === 1) return
        setSum(sum - price)
        addToBasket(barcode, items, order, -1)
    }
    
    const inc = (): void => {
        setSum(sum + price)
        addToBasket(barcode, items, order, 1)
    }

    const productPage = (id: number, items: any[]): void => {
        navigate(CATALOG + '/' + id)
        getProductById(id, items)
    }

    const removeItem = (): void => {
        removeFromBasket(barcode, order)
        setSum(sum - price * count)
        if (order.length === 1) setSum(0)
    }

    return(
        <div className = {css.container}>
            <div className = {css.item}>
                <div className = {css.info}>
                    <div
                        onClick={() => productPage(barcode, items)}
                        className = {css.image}
                    >
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
                        <h2 onClick={() => productPage(barcode, items)}>
                            {brand} {title}
                        </h2>
                        <p>
                            {description} 
                        </p>
                    </div> 
                </div>
                <div className = {css.interactive}>
                    <Counter
                        styles = {css.counter}
                        marginRight = {0}
                        increment = {inc}
                        decrement = {dec}
                        count = {count}
                    />
                    <span className = {css.price}>
                        {parseFloat((price * count).toFixed(2))} ₸
                    </span>
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