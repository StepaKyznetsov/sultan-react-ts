import React from 'react';
import PriceButton from '../../ui/PriceButton/PriceButton';
import css from './Menu.module.scss';
import {useNavigate} from 'react-router-dom';
import {CATALOG, MAIN} from '../../constants';
import BasketHead from "../../ui/Basket/Basket";
import Input from '../../ui/Input/Input';

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
                    <Input 
                        divStyles = {css.inputBlock}
                        inputStyles = {css.input}
                        imageStyles = {css.icon}
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
                <div className = {css.priceBtn}>
                    <PriceButton
                        buttonStyles = ''
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