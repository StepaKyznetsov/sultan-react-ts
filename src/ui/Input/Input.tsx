import React from 'react';
import css from './Input.module.scss';

interface IInputProps {
    divStyles: string;
    inputStyles: string;
    imageStyles: string;
    text: string;
    src: string;
    alt: string;
    onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
    onKeyDown?(e: any): void;
    value?: string
}

const Input: React.FC<IInputProps> = ({
    divStyles,
    inputStyles,
    imageStyles,
    text, 
    src, 
    alt,
    onChange,
    onKeyDown,
    value
}) => {
    return (
        <div className = {`${css.inputBlock} ${divStyles}`}>
            <input
                className = {inputStyles}
                onChange = {onChange}
                onKeyDown={onKeyDown}
                value = {value}
                placeholder = {text} 
                type = "text" 
            />
            <img 
                className = {`${css.icon} ${imageStyles}`}
                src = {src} 
                alt = {alt} 
            />
        </div>
    )
}

export default Input