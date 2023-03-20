import React from 'react';
import css from './Menu.module.scss'

const Menu: React.FC = () => {
    return(
        <div className = {css.container}>
            <div className = {css.content}>
                <img 
                    src = "/images/menu/logo.png" 
                    alt = "logo" 
                />
                <form>
                    <button>
                        Каталог
                        <img 
                            src = "/images/menu/catalog.png" 
                            alt = "catalog" 
                        />
                    </button>
                    <div className = {css.inputBlock}>
                        <input 
                            placeholder = "Поиск..." 
                            type = "text" 
                        />
                        <img 
                            className = {css.findIcon}
                            src = "/images/menu/find.png" 
                            alt = "find" 
                        />
                    </div>
                </form>
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
                <button className = {css.priceList}>
                    Прайс-лист
                    <img 
                        src = "/images/menu/download.png" 
                        alt = "download" 
                    />
                </button>
                <div className = {css.basket}>
                    <div className = {css.basketIcon}>
                        <img 
                            src = "/images/menu/basket.png" 
                            alt = "basket" 
                        />
                        <span className = {css.basketCounter}>
                            3
                        </span>
                    </div>
                    <div className = {css.sum}>
                        <span>
                            Корзина
                        </span>
                        <span className = {css.money}>
                            12 478 ₸ 
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
