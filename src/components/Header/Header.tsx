import React, {useEffect, useState, useRef} from 'react';
import css from './Header.module.scss';
import {CATALOG, LINKS} from '../../constants';
import Basket from "../../ui/Basket/Basket";
import {useActions} from "../../hooks/useActions";
import {useNavigate} from "react-router-dom";
import {useClickOutside} from '../../hooks/useClickOutside';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header: React.FC = () => {

    const {order} = useTypedSelector(state => state.basket)
    const [open, setOpen] = useState<boolean>(false)
    const [orderCount, setOrderCount] = useState<number>(order.length)
    const {changeLimit} = useActions()
    const navigate = useNavigate()
    const wrapperRef: any = useRef(null)
    useClickOutside(wrapperRef, setOpen)
    const notifyAddToCart = () => toast(`Позиция была добавлена в корзину!`)
    const removeFromCart = () => toast(`Позиция была удалена из корзины!`)

    useEffect(() => {
        orderCount > order.length ? removeFromCart() : notifyAddToCart()
        setOrderCount(order.length)
    }, [order.length])

    useEffect(() => {
        const handleWidthResize = (): void => {
            window.innerWidth <= 1280 ? changeLimit(16) : changeLimit(15)
        }
        window.addEventListener('resize', handleWidthResize)
        return () => {
            window.removeEventListener('resize', handleWidthResize)
        }
    }, [])
    
    return(
        <>
            <header className = {css.container} ref = {wrapperRef}>
                <ToastContainer />
                <div 
                    className = {
                        open ? `
                        ${css.content}` : 
                        `${css.content} ${css.hiddenContent}`
                    }
                >
                    <div className = {css.info}>
                        <div className = {css.address}>
                            <span>
                                г. Кокчетав, ул. Ж. Ташенова 129Б
                            </span>
                            <span className = {css.undertext}>
                                (Рынок Восточный)
                            </span>
                        </div>
                        <div className = {css.mail}>
                            <span>
                                opt.sultan@mail.ru
                            </span>
                            <span className = {css.undertext}>
                            На связи в любое время 
                            </span>
                        </div>
                        <div className = {css.number}>
                            <span>
                                Отдел продаж
                            </span>
                            <span className = {css.undertext}>
                            +7 (777) 490-00-91
                            </span>
                        </div>
                        <div className = {css.time}>
                            время работы: 9:00-20:00
                        </div>
                        <div className = {css.requestCall}>
                            Заказать звонок
                        </div>
                    </div>
                    <h3>
                        Меню сайта
                    </h3>
                    <nav>
                        {LINKS[0].map(e =>
                            <span 
                                key = {e}
                                className = {css.link}
                            >
                                {e}
                            </span> 
                        )}
                    </nav>
                    <button className = {css.priceBtn}>
                        Прайс-лист
                        <img
                            src = "/images/menu/download.png"
                            alt = "download"
                        />
                    </button>
                </div>
                <div className = {css.mobile}>
                    <div className = {css.head}>
                        <div
                            className = {css.burger}
                            onClick = {() => setOpen(!open)}>
                            <img
                                src ={
                                    open ?
                                        "/images/header/burgerClose.png" :
                                        "/images/header/burgerOpen.png"
                                }
                                alt = "menu"
                            />
                        </div>
                        <img
                            className = {css.logo}
                            src = "/images/menu/logo.png"
                            alt = "logo"
                        />
                        <Basket />
                    </div>
                    <div className = {css.btns}>
                        <div
                            onClick = {() => navigate(CATALOG)}
                            className = {css.catalog}
                        >
                            <img
                                src = "/images/header/catalog.png"
                                alt = "catalog"
                            />
                            <span>
                                Каталог
                            </span>
                        </div>
                        <div className = {css.catalog}>
                            <img
                                src = "/images/header/find.png"
                                alt = "catalog"
                            />
                            <span>
                                Поиск
                            </span>
                        </div>
                    </div>
                </div>
            </header>
        <div className = {open ? `${css.back}` : ''}></div>
        </>
    )
}

export default Header
