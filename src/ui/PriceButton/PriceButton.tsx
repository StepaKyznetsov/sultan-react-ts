import React from 'react';
import css from './PriceButton.module.scss';

interface IButton {
    text: string;
    url: string;
}

const PriceButton: React.FC<IButton> = ({text, url}) => {
    return (
        <button
            className = {css.priceButton}
        >
            {text}
            <img 
                src = {url} 
                alt = "download" 
            />
        </button>
    )
}

export default PriceButton