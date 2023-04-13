import React from "react";
import css from "./BackArrow.module.scss";
import { useNavigate } from "react-router-dom";
import { CATALOG } from "../../constants";

const BackArrow: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      data-testid="back-button"
      onClick={() => navigate(CATALOG)}
      className={css.container}
    >
      <img src="/images/ui/circle.png" alt="back" />
      <span>Назад</span>
    </div>
  );
};

export default BackArrow;
