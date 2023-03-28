import React from 'react';
import css from './Header.module.scss'
import {LINKS} from '../../constants/constants';

const Header: React.FC = () => {
    return(
        <header className = {css.container}>
            <div className = {css.content}>
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
                </div>
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
            </div>
        </header>
    )
}

export default Header
