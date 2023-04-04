import React, {useState} from 'react';
import Counter from '../../ui/Counter/Counter';
import Breadcrumbs from '../../ui/Breadcrumbs/Breadcrumbs';
import css from './ProductPage.module.scss';
import {useLocalStorage} from 'usehooks-ts';
import {CATALOG} from '../../constants/constants';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {useActions} from '../../hooks/useActions';
import BackArrow from "../../ui/BackArrow/BackArrow";
import {decrement, increment} from '../../utils';

interface IProductPageProps {
    title: string;
    photo: string;
    size: string;
    sizeType: string;
    barcode: number;
    manufacturer: string;
    brand: string;
    price: number;
    description: string;
}

const ProductPage: React.FC<IProductPageProps> = ({
    photo,
    title,
    size,
    sizeType,
    barcode,
    manufacturer,
    brand,
    price,
    description
}) => {

    const [sum, setSum] = useLocalStorage('sum', 0)
    const {addToBasket} = useActions()
    const {items} = useTypedSelector(state => state.catalog)
    const {order} = useTypedSelector(state => state.basket)
    const [counter, setCounter] = useState(1)
    const [showDescription, setShowDescription] = useState(false)
    const [showCharacteristics, setShowCharacteristics] = useState(false)

    const addToCart = (): void => {
        setSum(sum + counter * price)
        addToBasket(barcode, items, order, counter)
        setCounter(1)
    }

    const characteristics = [
        [
            {name: 'Производитель:', value: brand},
            {name: 'Бренд:', value: brand},
            {name: 'Артикул:', value: 460404},
            {name: 'Штрихкод:', value: barcode}
        ],
        [
            {name: 'Назначение:', value: brand},
            {name: 'Тип:', value: brand},
            {name: 'Производитель:', value: manufacturer},
            {name: 'Бренд:', value: brand},
            {name: 'Артикул:', value: barcode},
            {name: 'Штрихкод:', value: barcode},
            {name: sizeType === 'вес' ? 'Вес:' : 'Объём', value: size},
        ]
    ]

    return(
        <div className = {css.container}>
            <div className = {css.content}>
                <Breadcrumbs 
                    links = {[
                        {
                            title: 'Каталог', 
                            link: CATALOG
                        }, 
                        {
                            title: `${brand} ${title}`
                        }
                        ]} 
                    />
                <BackArrow />
                <div className = {css.info}>
                    <div className = {css.image}>
                        <img 
                            src = {photo} 
                            alt = "productImage" 
                        />
                    </div>
                    <div className = {css.blockInfo}>
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
                        <div className = {css.characteristics}>
                            {characteristics[0].map(e => 
                                <div>
                                    <span>{e.name} </span>
                                    <span className = {css.value}>
                                        {e.value}
                                    </span>
                                </div>
                            )}
                            <span
                                onClick = {() => setShowDescription(!showDescription)}
                                className = {
                                    showDescription ?
                                    `${css.subtitle}` : 
                                    `${css.subtitle} ${css.rotate}`
                                }
                            >
                                Описание
                            </span>
                            {showDescription &&
                                <p>
                                    {description}
                                </p>
                            }
                            <span
                                onClick = {() => setShowCharacteristics(!showCharacteristics)}
                                className = {showCharacteristics ?
                                    `${css.subtitle} ${css.ch}` : `${css.subtitle} ${css.ch} ${css.rotate}`
                                }
                            >
                                Характеристики
                            </span>
                            {showCharacteristics &&
                                <div>
                                    {characteristics[1].map(e =>
                                        <div>
                                            <span>{e.name} </span>
                                            <span className = {css.value}>
                                                {e.value}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            }
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    )
}
export default ProductPage