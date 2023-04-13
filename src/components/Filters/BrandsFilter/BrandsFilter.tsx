import React from "react";
import css from "./BrandsFilter.module.scss";
import Input from "../../../ui/Input/Input";
import { choosePage } from "../../../utils";
import { useTypedSelector, useActions } from "../../../hooks";

interface IBrandsFilter {
  setRequestData: () => void;
  filterState: any;
}

const BrandsFilter: React.FC<IBrandsFilter> = ({
  filterState,
  setRequestData,
}) => {
  const { setCatalogPage } = useActions();
  const { brands } = useTypedSelector((state) => state.brand);

  const handleFindBrand = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const value = e.target.value;
    filterState.setFindBrand(value);
  };

  const handleBrands = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let value = e.target.value;
    if (!filterState.brandsFilter.filter((e: any) => e === value).length) {
      filterState.setBrandsFilter([...filterState.brandsFilter, value]);
      choosePage(1, setCatalogPage);
    } else
      filterState.setBrandsFilter(
        filterState.brandsFilter.filter((e: any) => e !== value)
      );
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") setRequestData();
  };

  const removeRequestData = (): void => {
    filterState.setQuery("");
    filterState.setFindBrand("");
    filterState.setMinQuery(0);
    filterState.setMaxQuery(10000);
    filterState.setMin(0);
    filterState.setMax(10000);
  };

  return (
    <>
      <div
        className={
          filterState.open
            ? `${css.brandInput}`
            : `${css.brandInput} ${css.hiddenContent}`
        }
      >
        <h4 className={css.brandSubtitle}>Бренд</h4>
        <Input
          onChange={handleFindBrand}
          onKeyDown={handleKeyPress}
          value={filterState.findBrand}
          divStyles={css.inputBlock}
          inputStyles={css.input}
          imageStyles={css.icon}
          text="Поиск..."
          src="/images/menu/find.png"
          alt="find"
        />
      </div>
      <div
        className={
          filterState.open
            ? `${css.enumBrands}`
            : `${css.enumBrands} ${css.hiddenContent}`
        }
      >
        {!filterState.showAll
          ? brands.slice(0, 4).map((e) => (
              <div className={css.soloBrand} key={e.name}>
                <input
                  type="checkbox"
                  onChange={handleBrands}
                  id={e.name}
                  value={e.name}
                />
                <span>{e.name}</span>
                <span>({e.counter})</span>
              </div>
            ))
          : brands.map((e) => (
              <div className={css.soloBrand} key={e.name}>
                <input
                  type="checkbox"
                  onChange={handleBrands}
                  id={e.name}
                  value={e.name}
                />
                <span>{e.name}</span>
                <span>({e.counter})</span>
              </div>
            ))}
        {brands.length > 4 && (
          <div
            onClick={() => filterState.setShowAll(!filterState.showAll)}
            className={
              filterState.showAll
                ? `${css.showAll}`
                : `${css.showAll} ${css.rotate}`
            }
          >
            Показать все
          </div>
        )}
        <div className={css.findBrand}>
          <button onClick={setRequestData} className={css.show}>
            Показать
          </button>
          <button onClick={removeRequestData} className={css.remove}>
            <img src="/images/catalog/remove.png" alt="remove" />
          </button>
        </div>
      </div>
    </>
  );
};

export default BrandsFilter;
