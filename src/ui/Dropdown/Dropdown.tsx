import React from "react";
import css from "./Dropdown.module.scss";

interface IDropdownProps {
  options: {
    value: string;
    name: string;
  }[];
  sortName: string;
  sortNameHandler(e: React.ChangeEvent<HTMLSelectElement>): void;
}

const Dropdown: React.FC<IDropdownProps> = ({
  options,
  sortName,
  sortNameHandler,
}) => {
  return (
    <select
      onChange={sortNameHandler}
      value={sortName}
      className={css.dropdown}
    >
      {options.map((e) => (
        <option key={e.value} value={e.value}>
          {e.name}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
