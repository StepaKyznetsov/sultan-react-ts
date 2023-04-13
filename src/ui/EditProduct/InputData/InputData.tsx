import React from "react";
import ChangeProductInput from "../../ChangeProductInput/ChangeProductInput";

interface IInputData {
  brand: string;
  title: string;
  barcode: number;
  size: string;
  manufacturer: string;
  price: number;
  photo: string;
  handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>): void;
}

const InputData: React.FC<IInputData> = ({
  brand,
  title,
  barcode,
  size,
  manufacturer,
  price,
  photo,
  handleKeyPress,
}) => {
  const inputData = [
    {
      id: "brandInput",
      name: "Бренд",
      field: brand,
      type: "string",
    },
    {
      id: "titleInput",
      name: "Название",
      field: title,
      type: "string",
    },
    {
      id: "barcodeInput",
      name: "Штрих-код",
      field: barcode,
      type: "number",
    },
    {
      id: "sizeInput",
      name: "Размер",
      field: size,
      type: "string",
    },
    {
      id: "manufacturerInput",
      name: "Производитель",
      field: manufacturer,
      type: "string",
    },
    {
      id: "priceInput",
      name: "Цена",
      field: price,
      type: "number",
    },
    {
      id: "photoInput",
      name: "Фото",
      field: photo,
      type: "string",
    },
  ];

  return (
    <>
      {inputData.map((e) => (
        <ChangeProductInput
          key={e.id}
          name={e.name}
          field={e.field}
          type={e.type}
          id={e.id}
          handleKeyPress={handleKeyPress}
        />
      ))}
    </>
  );
};

export default InputData;
