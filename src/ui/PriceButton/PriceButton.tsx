import React from 'react';
import css from './PriceButton.module.scss';

interface IButton {
    buttonStyles: string;
    text: string;
    url: string;
}

const PriceButton: React.FC<IButton> = ({
    text, 
    url, 
    buttonStyles
}) => {
    return (
        <button
            className = {`${css.priceButton} ${buttonStyles}`}
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