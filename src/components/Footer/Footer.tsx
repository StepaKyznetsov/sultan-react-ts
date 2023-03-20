import React from 'react';
import css from './Footer.module.scss'

const Footer: React.FC = () => {
    return(
        <div className = {css.container}>
            <div className = {css.content}>
                <div className = {css.column}>
                    <img 
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
                    <input 
                        placeholder = "Введите ваш E-mail" 
                        type="text" 
                    />
                </div>
                <div className = {css.column}>
                    
                </div>
                <div className = {css.column}>
                    
                </div>
                <div className = {css.column}>
                    
                </div>
                <div className = {css.column}>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer
