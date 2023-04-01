import React from 'react';
import PriceButton from '../../ui/PriceButton/PriceButton';
import css from './Menu.module.scss';
import {useNavigate} from 'react-router-dom';
import {CATALOG, MAIN} from '../../constants/constants';
import BasketHead from "../../ui/Basket/Basket";

const Menu: React.FC = () => {
    
    const navigate = useNavigate()

    return(
        <div className = {css.container}>
            <div className = {css.content}>
                <img
                    className = {css.logo}
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
                    <div className = {css.inputBlock}>
                        <input
                            placeholder = 'Поиск...'
                            type = "text"
                        />
                    </div>
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
                <div className = {css.priceBtn}>
                    <PriceButton
                        text = 'Прайс-лист'
                        url = '/images/menu/download.png'
                    />
                </div>
                <BasketHead />
            </div>
        </div>
    )
}

export default Menu