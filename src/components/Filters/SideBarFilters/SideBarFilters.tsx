import React from "react";
import css from "./SideBarFilters.module.scss";
import { choosePage, filterByCategory } from "../../../utils";
import { useActions } from "../../../hooks";

interface ISideBarFilters {
  filterState: any;
}

const SideBarFilters: React.FC<ISideBarFilters> = ({ filterState }) => {
  const { setCatalogPage } = useActions();

  return (
    <div className={css.sideBarFilters}>
      <span
        className={
          filterState.categoriesFilter.indexOf("Уход за телом") !== -1
            ? `${css.activeSpan}`
            : ""
        }
        onClick={() => {
          choosePage(1, setCatalogPage);
          filterByCategory(
            filterState.categoriesFilter,
            "Уход за телом",
            filterState.setCategoriesFilter
          );
        }}
      >
        Уход за телом
      </span>
      <span
        className={
          filterState.categoriesFilter.indexOf("Уход за руками") !== -1
            ? `${css.activeSpan}`
            : ""
        }
        onClick={() => {
          choosePage(1, setCatalogPage);
          filterByCategory(
            filterState.categoriesFilter,
            "Уход за руками",
            filterState.setCategoriesFilter
          );
        }}
      >
        Уход за руками
      </span>
    </div>
  );
};

export default SideBarFilters;
