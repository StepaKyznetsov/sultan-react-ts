import React from 'react';
import PriceButton from '../../ui/PriceButton/PriceButton';
import css from './Menu.module.scss';
import Input from '../../ui/Input/Input';
import {useNavigate} from 'react-router-dom';
import {BASKET, CATALOG, MAIN} from '../../constants/constants';
import {useReadLocalStorage} from 'usehooks-ts';
import {useTypedSelector} from '../../hooks/useTypedSelector';

const Menu: React.FC = () => {
    
    const navigate = useNavigate()
    const sum = useReadLocalStorage('sum')
    const {order} = useTypedSelector(state => state.basket)

    return(
        <div className = {css.container}>
            <div className = {css.content}>
                <img
                    onClick={() => navigate(MAIN)}
                    src = "/images/menu/logo.png" 
                    alt = "logo" 
                />
                <div className = {css.nav}>
                    <button onClick={() => navigate(CATALOG)}>
                        Каталог
                        <img 
                            src = "/images/menu/catalog.png" 
                            alt = "catalog" 
                        />
                    </button>
                    <Input
                        width = {233}
                        text = 'Поиск...'
                        src = '/images/menu/find.png'
                        alt = 'find'
                    />
                </div>
                <div className = {css.data}>
                    <div className = {css.text}>
                        <span className = {css.number}>
                            +7 (777) 490-00-91
                        </span>
                        <span className = {css.time}>
                            время работы: 9:00-20:00
                        </span>
                        <span className = {css.orderCall}>
                            Заказать звонок
                        </span>
                    </div>
                    <img 
                        src = "/images/menu/call.png" 
                        alt = "call" 
                    />
                </div>
                <PriceButton 
                    text = 'Прайс-лист'
                    url = '/images/menu/download.png'
                />
                <div
                    onClick={() => navigate(BASKET)}
                    className = {css.basket}
                >
                    <div className = {css.basketIcon}>
                        <img 
                            src = "/images/menu/basket.png" 
                            alt = "basket" 
                        />
                        {
                            order.length 
                            ? 
                            <span className = {css.basketCounter}>
                                {order.length}
                            </span>
                            :
                            null
                        }
                    </div>
                    <div className = {css.sum}>
                        <span>
                            Корзина
                        </span>
                        <div className = {css.money}>
                            {parseFloat(Number(sum).toFixed(2))} ₸
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu