import React from "react";
import css from "./PriceFilter.module.scss";

interface IPriceFilter {
  filterState: any;
  setRequestData: () => void;
}

const PriceFilter: React.FC<IPriceFilter> = ({
  filterState,
  setRequestData,
}) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") setRequestData();
  };

  return (
    <div className={css.priceFilter}>
      <input
        value={filterState.min}
        type="number"
        onChange={(e) => filterState.setMin(Number(e.target.value))}
        onKeyDown={(e) => handleKeyPress(e)}
      />
      <span>-</span>
      <input
        value={filterState.max}
        type="number"
        onChange={(e) => filterState.setMax(Number(e.target.value))}
        onKeyDown={(e) => handleKeyPress(e)}
      />
    </div>
  );
};

export default PriceFilter;
