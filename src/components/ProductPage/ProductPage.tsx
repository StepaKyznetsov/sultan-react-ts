import React from "react";
import css from "./ProductPage.module.scss";
import Breadcrumbs from "../../ui/Breadcrumbs/Breadcrumbs";
import BackArrow from "../../ui/BackArrow/BackArrow";
import ProductCharacteristics from "../../ui/ProductCharacteristics/ProductCharacteristics";
import ProductAbout from "../../ui/ProductAbout/ProductAbout";
import { CATALOG } from "../../constants";

interface IProductPageProps {
  title: string;
  photo: string;
  size: string;
  sizeType: string;
  barcode: number;
  manufacturer: string;
  brand: string;
  price: number;
  description: string;
}

const ProductPage: React.FC<IProductPageProps> = ({
  photo,
  title,
  size,
  sizeType,
  barcode,
  manufacturer,
  brand,
  price,
  description,
}) => {
  return (
    <div className={css.container}>
      <div className={css.content}>
        <Breadcrumbs
          links={[
            {
              title: "Каталог",
              link: CATALOG,
            },
            {
              title: `${brand} ${title}`,
            },
          ]}
        />
        <BackArrow />
        <div className={css.info}>
          <div className={css.image}>
            <img src={photo} alt="productImage" />
          </div>
          <div className={css.blockInfo}>
            <ProductAbout
              brand={brand}
              title={title}
              barcode={barcode}
              sizeType={sizeType}
              size={size}
              price={price}
            />
            <ProductCharacteristics
              brand={brand}
              barcode={barcode}
              manufacturer={manufacturer}
              sizeType={sizeType}
              size={size}
              description={description}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
