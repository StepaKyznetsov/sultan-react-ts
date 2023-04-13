import React, { useEffect, useState } from "react";
import css from "./Order.module.scss";
import BasketItem from "../BasketItem/BasketItem";
import Breadcrumbs from "../../ui/Breadcrumbs/Breadcrumbs";
import BackArrow from "../../ui/BackArrow/BackArrow";
import Modal from "../Modal/Modal";
import { useLocalStorage } from "usehooks-ts";
import { BASKET, CATALOG } from "../../constants";
import { useTypedSelector, useActions } from "../../hooks";
import { useNavigate } from "react-router-dom";

const Order: React.FC = () => {
  const [sum, setSum] = useLocalStorage("sum", 0);
  const [products, setProducts] = useLocalStorage("products", 0);
  const [modal, setModal] = useState<boolean>(false);
  const { resetBasket } = useActions();
  const { order } = useTypedSelector((state) => state.basket);
  const navigate = useNavigate();

  let data = order.map((e) => JSON.parse(JSON.stringify(e)));

  useEffect(() => {
    modal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [modal, setModal]);

  const checkout = (): void => {
    if (sum === 0 && products === 0) return;
    resetBasket();
    setModal(true);
    setSum(0);
    setProducts(0);
  };

  return (
    <div className={css.container}>
      <Breadcrumbs
        links={[
          {
            title: "Корзина",
            link: BASKET,
          },
        ]}
      />
      <BackArrow />
      {!data.length ? (
        <h2 className={css.title}>
          Корзина пуста
          <span onClick={() => navigate(CATALOG)}> К покупкам</span>
        </h2>
      ) : (
        <h2 className={css.title}>Корзина</h2>
      )}
      {data.map((e) => (
        <BasketItem
          key={e.data[0].barcode}
          image={e.data[0].photo}
          size={e.data[0].size}
          sizeType={e.data[0].sizeType}
          title={e.data[0].title}
          brand={e.data[0].brand}
          description={e.data[0].description}
          price={e.data[0].price}
          barcode={e.data[0].barcode}
          count={e.counter}
        />
      ))}
      <div className={css.checkout}>
        <Modal visible={modal} setVisible={setModal}>
          <div className={css.modal}>
            <div className={css.close}>
              <img
                onClick={() => setModal(false)}
                src="/images/basket/close.png"
                alt="exit"
              />
            </div>
            <div className={css.success}>
              <img src="/images/basket/success.png" alt="success" />
              <h2 className={css.thanks}>Спасибо за заказ</h2>
              <p>Наш менеджер свяжется с вами в ближайшее время</p>
            </div>
          </div>
        </Modal>
        <button onClick={() => checkout()}>Оформить заказ</button>
        <span className={css.sum}>{parseFloat(Number(sum).toFixed(2))} ₸</span>
      </div>
    </div>
  );
};

export default Order;
