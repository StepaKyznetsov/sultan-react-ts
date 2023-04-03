import React, {useEffect, useState, useRef} from 'react';
import css from './Header.module.scss'
import {CATALOG, LINKS} from '../../constants/constants';
import Basket from "../../ui/Basket/Basket";
import {useActions} from "../../hooks/useActions";
import {useNavigate} from "react-router-dom";

const Header: React.FC = () => {

    const [open, setOpen] = useState(false)
    const {changeLimit} = useActions()
    const navigate = useNavigate()
    const wrapperRef: any = useRef(null)

    useEffect(() => {
        window.addEventListener('resize', (e) => {
            window.innerWidth <= 1280 ? changeLimit(16) : changeLimit(15)
        })
    }, [])

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target))
                setOpen(false)
        }
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [])

    return(
        <header className = {css.container} ref = {wrapperRef}>
            <div className = {open ? `${css.content}` : `${css.content} ${css.hiddenContent}`}>
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
    )
}

export default Header
