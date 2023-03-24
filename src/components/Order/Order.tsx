import React, {useState} from 'react';
import BasketItem from '../BasketItem/BasketItem';
import Breadcrumbs from '../../ui/Breadcrumbs/Breadcrumbs';
import Modal from '../Modal/Modal';
import css from './Order.module.scss';
import {useLocalStorage} from 'usehooks-ts';
import { BASKET } from '../../constants/constants';

const Order: React.FC = () => {

    const [sum, setSum] = useLocalStorage('sum', 0)
    const [products, setProducts] = useLocalStorage('products', 0)
    const [modal, setModal] = useState(false);

    const checkout = (): void => {
        if (sum === 0 && products === 0) return
        setModal(true)
        setSum(0)
        setProducts(0)
    }

    return(
        <div className = {css.container}>
            <Breadcrumbs 
                links = {[
                    {
                        title: 'Корзина', 
                        link: BASKET
                    }
                ]}
            />
            <h2>
                Корзина
            </h2>
            <BasketItem />
            <div className = {css.checkout}>
                <button onClick={() => checkout()}>
                    Оформить заказ
                </button>
                <Modal visible={modal} setVisible={setModal}>
                    <div className = {css.modal}>
                        <div className = {css.close}>
                            <img 
                                onClick = {() => setModal(false)}
                                src = "/images/basket/close.png" 
                                alt = "exit" 
                            />
                        </div>
                        <div className = {css.success}>
                            <img 
                                src = "/images/basket/success.png" 
                                alt = "success" 
                            />
                            <h2 className = {css.thanks}>
                                Спасибо за заказ
                            </h2>
                            <p>
                                Наш менеджер свяжется с вами в ближайшее время
                            </p>
                        </div>
                    </div>
                </Modal>
                <span className = {css.sum}>
                    {localStorage.getItem('sum')} ₸
                </span>
            </div>
        </div>
    )
}

export default Order