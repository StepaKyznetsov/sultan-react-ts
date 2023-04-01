import React from 'react';
import css from './Input.module.scss';

interface IInputProps {
    text: string;
    src: string;
    alt: string;
    width: string;
}

const Input: React.FC<IInputProps> = ({text, src, alt, width}) => {
    return (
        <div className = {css.inputBlock}>
            <input
                style = {{width: `${width}`}}
                placeholder = {text} 
                type = "text" 
            />
            <img 
                className = {css.icon}
                src = {src} 
                alt = {alt} 
            />
        </div>
    )
}

export default Input