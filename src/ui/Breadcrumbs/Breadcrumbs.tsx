import React from "react";
import css from "./Breadcrumbs.module.scss";
import { useNavigate } from "react-router-dom";
import { MAIN } from "../../constants";

interface link {
  title: string;
  link?: string;
}

interface IBreadcrumbsProps {
  links: link[];
}

const Breadcrumbs: React.FC<IBreadcrumbsProps> = ({ links }) => {
  const navigate = useNavigate();

  const navigateTo = (url?: string): void => {
    if (!url) return;
    navigate(url);
  };

  return (
    <div className={css.container}>
      <span className={css.main} onClick={() => navigate(MAIN)}>
        Главная
      </span>
      {links.map((e) => (
        <span onClick={() => navigateTo(e.link)} key={e.title}>
          {e.title}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
