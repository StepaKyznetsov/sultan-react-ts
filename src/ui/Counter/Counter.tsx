import React, {useState} from 'react';
import css from './Counter.module.scss';

interface ICounter {
    marginRight: number; 
}

const Counter: React.FC<ICounter> = ({marginRight}) => {

    const [counter, setCounter] = useState(1)
    const [decrementActive, setDecrementActive] = useState(false)

    const decrement = (): void => {
        if (counter === 2) setDecrementActive(false)
        if (counter === 1) return 
        setCounter(counter - 1)
    }
    const increment = (): void  => {
        setDecrementActive(true)
        setCounter(counter + 1)
    }
    
    return(
        <div
            style = {{marginRight: `${marginRight}px`}}
            className = {css.btns}
        >
            <button
                disabled = {!decrementActive}
                onClick={() => decrement()}
                className = {css.btn}
            >
                -
            </button>
            <div>
                {counter}
            </div>
            <button
                onClick={() => increment()}
                className = {css.btn}
            >
                +
            </button> 
        </div>
    )
}

export default Counter