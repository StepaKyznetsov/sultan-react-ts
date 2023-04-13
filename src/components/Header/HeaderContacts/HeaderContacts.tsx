import React from "react";
import css from "./HeaderContacts.module.scss";

const HeaderContacts: React.FC = () => {
  return (
    <div className={css.info}>
      <div className={css.address}>
        <span>г. Кокчетав, ул. Ж. Ташенова 129Б</span>
        <span className={css.undertext}>(Рынок Восточный)</span>
      </div>
      <div className={css.mail}>
        <span>opt.sultan@mail.ru</span>
        <span className={css.undertext}>На связи в любое время</span>
      </div>
      <div className={css.number}>
        <span>Отдел продаж</span>
        <span className={css.undertext}>+7 (777) 490-00-91</span>
      </div>
      <div className={css.time}>время работы: 9:00-20:00</div>
      <div className={css.requestCall}>Заказать звонок</div>
    </div>
  );
};

export default HeaderContacts;
