import React from 'react';
import Counter from '../../ui/Counter/Counter';
import PriceButton from '../../ui/PriceButton/PriceButton';
import Breadcrumbs from '../../ui/Breadcrumbs/Breadcrumbs';
import css from './ProductPage.module.scss';
import {useLocalStorage} from 'usehooks-ts';
import {CATALOG} from '../../constants/constants';

interface IProductPageProps {
    title: string;
    photo: string;
    size: string;
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
    barcode,
    manufacturer,
    brand,
    price,
    description
}) => {

    const [sum, setSum] = useLocalStorage('sum', 0)
    const [products, setProducts] = useLocalStorage('products', 0)

    const addToCart = (): void => {
        setProducts(products + 1)
        setSum(+((sum + price).toFixed(2)))
    }
    
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
                                    src = "/images/catalog/box.svg" 
                                    alt = "type" 
                                />
                                <span>
                                    {size}
                                </span>
                            </div>
                            <div className = {css.interaction}>
                                <span className = {css.price}>
                                    {price} ₸
                                </span>
                                <Counter marginRight = {38} />
                                <div onClick={() => addToCart()}>
                                    <PriceButton
                                        text = 'В корзину'
                                        url = '/images/catalog/basket.png'
                                    />    
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
                            <div>
                                <span>Производитель:</span>
                                <span className = {css.value}> {brand}</span>
                            </div>
                            <div>
                                <span>Бренд:</span>
                                <span className = {css.value}> {brand}</span>
                            </div>
                            <div>
                                <span>Артикул:</span>
                                <span className = {css.value}> {manufacturer}</span>
                            </div>
                            <div>
                                <span>Штрихкод:</span>
                                <span className = {css.value}> {barcode}</span>
                            </div>
                            <span className = {css.subtitle}>
                                Описание
                            </span>
                            <p>
                                {description}
                            </p>
                            <span className = {css.subtitle}>
                                Характеристики
                            </span>
                            <div>
                                <span>Назначение:</span>
                                <span className = {css.value}> {brand}</span>
                            </div>
                            <div>
                                <span>Тип:</span>
                                <span className = {css.value}> {brand}</span>
                            </div>
                            <div>
                                <span>Производитель:</span>
                                <span className = {css.value}> {manufacturer}</span>
                            </div>
                            <div>
                                <span>Бренд:</span>
                                <span className = {css.value}> {barcode}</span>
                            </div>
                            <div>
                                <span>Артикул:</span>
                                <span className = {css.value}> {barcode}</span>
                            </div>
                            <div>
                                <span>Штрихкод:</span>
                                <span className = {css.value}> {barcode}</span>
                            </div>
                            <div>
                                <span>Вес:</span>
                                <span className = {css.value}> {size}</span>
                            </div>
                            <div>
                                <span>Объем:</span>
                                <span className = {css.value}> {size}</span>
                            </div>
                            <div>
                                <span>Кол-во в коробке:</span>
                                <span className = {css.value}> {size}</span>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    )
}
export default ProductPage