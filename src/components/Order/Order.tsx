import React, {useEffect, useState} from 'react';
import BasketItem from '../BasketItem/BasketItem';
import Breadcrumbs from '../../ui/Breadcrumbs/Breadcrumbs';
import Modal from '../Modal/Modal';
import css from './Order.module.scss';
import {useLocalStorage} from 'usehooks-ts';
import {BASKET} from '../../constants/constants';
import {useActions} from '../../hooks/useActions';
import {useTypedSelector} from '../../hooks/useTypedSelector';

const Order: React.FC = () => {

    const [sum, setSum] = useLocalStorage('sum', 0)
    const [products, setProducts] = useLocalStorage('products', 0)
    const [modal, setModal] = useState(false);
    const {resetBasket} = useActions()
    const {order} = useTypedSelector(state => state.basket)
    
    let data = order.map(e => JSON.parse(JSON.stringify(e)))
    
    useEffect(() => {
        modal ? 
            document.body.style.overflow = 'hidden' : 
            document.body.style.overflow = 'auto'
    }, [modal, setModal])

    const checkout = (): void => {
        if (sum === 0 && products === 0) return
        resetBasket()
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
            <h2 className = {css.title}>
                Корзина
            </h2>
            {data.map(e =>
                <BasketItem
                    key = {e.data[0].barcode}
                    image = {e.data[0].photo}
                    size = {e.data[0].size} 
                    sizeType = {e.data[0].sizeType}
                    title = {e.data[0].title}
                    brand = {e.data[0].brand}
                    description = {e.data[0].description}
                    price = {e.data[0].price}
                    barcode = {e.data[0].barcode}
                    count = {e.counter}
                />
            )}
            <div className = {css.checkout}>
                <button onClick={() => checkout()}>
                    Оформить заказ
                </button>
                <Modal visible={modal} setVisible={setModal}>
                    <div className = {css.modal}>
                        <div className = {css.close}>
                            <img 
                                onClick = {() => checkout()}
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