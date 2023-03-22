import React from 'react';
import css from './PriceButton.module.scss';

const PriceButton: React.FC = () => {
    return (
        <button className = {css.priceButton}>
            Прайс-лист
            <img 
                src = "/images/menu/download.png" 
                alt = "download" 
            />
        </button>
    )
}

export default PriceButton