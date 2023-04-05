import React from 'react';
import css from './Basket.module.scss'
import {BASKET} from "../../constants";
import {useNavigate} from "react-router-dom";
import {useReadLocalStorage} from "usehooks-ts";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const Basket: React.FC = () => {

    const navigate = useNavigate()
    const sum = useReadLocalStorage('sum')
    const {order} = useTypedSelector(state => state.basket)

    return(
        <div className = {css.basket}>
            <div
                className = {css.basketIcon}
                onClick={() => navigate(BASKET)}
            >
                <img
                    src = "/images/menu/basket.png"
                    alt = "basket"
                />
                {
                    order.length
                        ?
                        <span className = {css.basketCounter}>
                                {order.length}
                            </span>
                        :
                        null
                }
            </div>
            <div className = {css.sum}>
                        <span>
                            Корзина
                        </span>
                <div className = {css.money}>
                    {parseFloat(Number(sum).toFixed(2))} ₸
                </div>
            </div>
        </div>
    )
}

export default Basket