import React, { useState } from "react";
import css from "./ChangeProductInput.module.scss";

interface IChangeProductInput {
  name: string;
  field: string | number;
  type: string;
  id: string;
  handleKeyPress(e: any): void;
}

const ChangeProductInput: React.FC<IChangeProductInput> = ({
  name,
  field,
  type,
  id,
  handleKeyPress,
}) => {
  const [value, setValue] = useState(field);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.currentTarget.value);
  };

  return (
    <div className={css.field}>
      <span>{name}: </span>
      <input
        id={id}
        type={type}
        value={value || ""}
        onChange={handleChange}
        onKeyDown={(e) => handleKeyPress(e)}
      />
    </div>
  );
};

export default ChangeProductInput;
