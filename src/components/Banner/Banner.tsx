import React from "react";
import css from "./Banner.module.scss";
import { useNavigate } from "react-router-dom";
import { CATALOG } from "../../constants";

const Banner: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={css.container}>
      <div className={css.content}>
        <h1>
          Бытовая химия, косметика <br />и хозтовары
        </h1>
        <h3>оптом по кокчетаву и области</h3>
        <button onClick={() => navigate(CATALOG)}>В КАТАЛОГ</button>
        <div className={css.pluses}>
          <div className={css.preference}>
            <img
              src="/images/banner/circle.png"
              alt="plus"
              className={css.circle}
            />
            <span>
              Только самые <br />
              выгодные предложения
            </span>
          </div>
          <div className={css.preference}>
            <img
              src="/images/banner/circle.png"
              alt="plus"
              className={css.circle}
            />
            <span>
              Бесплатная доставка
              <br />
              по <span className={css.bold}>Кокчетаву от 10 тыс ₸</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
