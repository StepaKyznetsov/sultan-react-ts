import React from 'react';
import css from './Categories.module.scss'

const Categories: React.FC = () => {
    return(
        <div className = {css.container}>
            <div className = {css.content}>
                <div>
                    <h2>категории </h2>
                    <h2>товаров</h2>
                </div>
                <p>
                    10 000+ ходовых позиций по специальным ценам
                </p>
                <div className = {css.cards}>
                    <div className = {css.cardItem}>
                        <img 
                            src = "/images/banner/cat1.png" 
                            alt = "cat1"
                        />
                        <span>
                            Бытовая химия
                        </span>
                    </div>
                    <div className = {css.cardItem}>
                        <img 
                            src = "/images/banner/cat2.png" 
                            alt = "cat1"
                        />
                        <span>
                            Косметика и гигиена
                        </span>
                    </div>
                    <div className = {css.cardItem}>
                        <img 
                            src = "/images/banner/cat3.png" 
                            alt = "cat1"
                        />
                        <span>
                            Товары для дома
                        </span>
                    </div>
                    <div className = {css.cardItem}>
                        <img 
                            src = "/images/banner/cat4.png" 
                            alt = "cat1"
                        />
                        <span>
                            Товары для детей и мам
                        </span>
                    </div>
                    <div className = {css.cardItem}>
                        <img 
                            src = "/images/banner/cat5.png" 
                            alt = "cat1"
                        />
                        <span>
                            Посуда
                        </span>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Categories
