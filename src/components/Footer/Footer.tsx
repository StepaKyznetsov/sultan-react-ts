import React from 'react';
import PriceButton from '../../ui/PriceButton/PriceButton';
import css from './Footer.module.scss';
import {LINKS} from '../../constants/constants';
import Input from '../../ui/Input/Input';

const Footer: React.FC = () => {
    return(
        <footer className = {css.container}>
            <div className = {css.content}>
                <div className = {css.column}>
                    <img
                        className = {css.logo}
                        src = "/images/footer/logo.png" 
                        alt = "logoFooter" 
                    />
                    <p>
                        Компания «Султан» — снабжаем розничные магазины товарами
                        "под ключ" в Кокчетаве и Акмолинской области
                    </p>
                    <span>
                        Подпишись на скидки и акции
                    </span>
                    <Input 
                        divStyles = {css.inputBlock}
                        inputStyles = {css.input}
                        imageStyles = {css.icon}
                        text = 'Введите ваш E-mail' 
                        src = '/images/footer/input.png' 
                        alt = 'find'
                    />
                </div>
                <div className = {css.column}>
                    <span className = {css.head}>
                        Меню сайта:
                    </span>
                    {LINKS[0].map((e: string) =>
                        <span 
                            className = {css.link} 
                            key = {e}
                        >
                            {e}
                        </span>
                    )}
                </div>
                <div className = {css.column}>
                    <span className = {css.head}>
                        Категории:
                    </span>
                    {LINKS[1].map((e: string) =>
                        <span 
                            className = {css.link} 
                            key = {e}
                        >
                            {e}
                        </span>
                    )}
                </div>
                <div className = {css.column}>
                    <span className = {`${css.head} ${css.download}`}>
                        Скачать прайс-лист:
                    </span>
                    <PriceButton 
                        buttonStyles = {css.priceButton}
                        text = 'Прайс-лист' 
                        url = "/images/menu/download.png"
                    />
                    <span className = {css.connect}>
                        Связь в мессенджерах:
                    </span>
                    <div>
                        <img
                            className = {css.messenger}
                            src = "/images/footer/wup.png"
                            alt = "whatsup"
                        />
                        <img
                            src = "/images/footer/tg.png"
                            alt = "telegram"
                        />
                    </div>
                </div>
                <div className = {css.column}>
                    <span className = {css.head}>
                        Контакты:
                    </span>
                    <span className = {css.number}>
                        +7 (777) 490-00-91
                    </span>
                    <span className = {css.time}>
                        время работы: 9:00-20:00
                    </span>
                    <span className = {css.call}>
                        Заказать звонок
                    </span>
                    <span className = {css.mail}>
                        opt.sultan@mail.ru<br />
                        <span className = {css.time}>
                            На связи в любое время
                        </span>
                    </span>
                    <div>
                        <img
                            className = {css.card}
                            src = "/images/footer/visa.png"
                            alt = "visa"
                        />
                        <img
                            src = "/images/footer/mc.png"
                            alt = "mastercard"
                        />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer