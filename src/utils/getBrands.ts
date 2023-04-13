import { Brand } from "../types/brand";

export const getBrands = (arr: any[], brands: Brand[]): Brand[] => {
  brands = [];
  arr.map((item) => {
    if (!brands.filter((e) => e.name === item.brand).length)
      brands.push({
        name: item.brand,
        counter: 1,
      });
    else {
      let obj: Brand | undefined = brands.find((e) => e.name === item.brand);
      if (!obj) return;
      obj.counter += 1;
    }
  });
  return brands;
};
