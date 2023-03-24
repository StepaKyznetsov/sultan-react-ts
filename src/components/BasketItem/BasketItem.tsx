import React from 'react';
import Counter from '../../ui/Counter/Counter';
import css from './BasketItem.module.scss';

const BasketItem: React.FC = () => {
    return(
        <div className = {css.container}>
            <div className = {css.item}>
                <div className = {css.info}>
                    <div className = {css.image}>
                        <img
                            src = "/images/mock/aos.png" 
                            alt = "productImage" 
                        />  
                    </div>
                    <div className = {css.text}>
                        <div className = {css.sizeType}>
                            <img
                                src = "/images/catalog/bottle.svg"
                                alt = "sizeType" 
                            />
                            <span>
                                450 мл
                            </span>
                        </div>
                        <h2>
                            AOS средство для мытья посуды Crystal
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit. Nullam interdum ut justo, 
                            vestibulum sagittis iaculis iaculis. Quis 
                            mattis vulputate feugiat massa vestibulum 
                            duis. 
                        </p>
                    </div>    
                </div>
                <div className = {css.interactive}>
                    <Counter marginRight = {88} />
                    <span className = {css.price}>
                        48,76 ₸
                    </span>
                    <button className = {css.remove}>
                        <img 
                            src = "/images/basket/remove.png" 
                            alt = "remove" 
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BasketItem