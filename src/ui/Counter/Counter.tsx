import React from 'react';
import css from './Counter.module.scss';

interface ICounter {
    marginRight: number;
    styles: string;
    increment(): void;
    decrement(): void;
    count: number;
}

const Counter: React.FC<ICounter> = ({
    marginRight, 
    increment, 
    decrement, 
    count,
    styles
}) => {
    return(
        <div
            style = {{marginRight: `${marginRight}px`}}
            className = {`${css.btns} ${styles}`}
        >
            <button
                onClick = {() => decrement()}
                className = {css.btn}
            >
                -
            </button>
            <input
                type = "number" 
                disabled 
                value = {count} 
            />
            <button
                onClick = {() => increment()}
                className = {css.btn}
            >
                +
            </button> 
        </div>
    )
}

export default Counter