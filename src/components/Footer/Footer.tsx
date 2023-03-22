import React from 'react';
import PriceButton from '../../ui/PriceButton/PriceButton';
import css from './Footer.module.scss';
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
                        Компания «Султан» — снабжаем<br />розничные магазины товарами<br />
                        "под ключ" в Кокчетаве и Акмолинской<br />области
                    </p>
                    <span>
                        Подпишись на скидки и акции
                    </span>
                    <Input
                        width = {252}
                        text = 'Введите ваш E-mail'
                        src = '/images/footer/input.png'
                        alt = 'find'
                    />
                </div>
                <div className = {css.column}>
                    <span className = {css.head}>
                        Меню сайта:
                    </span>
                    <a href = "#">
                        О компании
                    </a>
                    <a href = "#">
                        Доставка и оплата
                    </a>
                    <a href = "#">
                        Возврат
                    </a>
                    <a href = "#">
                        Контакты
                    </a>
                </div>
                <div className = {css.column}>
                    <span className = {css.head}>
                        Категории:
                    </span>
                    <a href = "#">
                        Бытовая химия
                    </a>
                    <a href = "#">
                        Косметика и гигиена
                    </a>
                    <a href = "#">
                        Товары для дома
                    </a>
                    <a href = "#">
                        Товары для детей и мам
                    </a>
                    <a href = "#">
                        Посуда
                    </a>
                </div>
                <div className = {css.column}>
                    <span className = {css.head}>
                        Скачать прайс-лист:
                    </span>
                    <PriceButton />
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
                        <span className = {css.time}>На связи в любое время</span>
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
