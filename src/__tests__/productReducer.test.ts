import { productReducer } from "../store/reducers/productReducer";
import { ProductActionTypes } from "../types/product";

describe("productReducer", () => {
  it("Обновить текущий продукт в стейте после диспатча SET_CURRENT_PRODUCT", () => {
    const initialState = {
      current: {},
    };

    const action = {
      type: ProductActionTypes.SET_CURRENT_PRODUCT,
      payload: {
        id: 0,
        title: "Экологичное туалетное мыло. Литсея и бергамот",
        photo: "/images/mock/biomio.png",
        sizeType: "вес",
        size: "90 г",
        barcode: 4604049097548,
        manufacturer: "Нэфис",
        brand: "BioMio",
        price: 34.61,
        categories: ["Уход за руками"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    };

    const expectedState = {
      current: {
        id: 0,
        title: "Экологичное туалетное мыло. Литсея и бергамот",
        photo: "/images/mock/biomio.png",
        sizeType: "вес",
        size: "90 г",
        barcode: 4604049097548,
        manufacturer: "Нэфис",
        brand: "BioMio",
        price: 34.61,
        categories: ["Уход за руками"],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    };

    expect(productReducer(initialState, action)).toEqual(expectedState);
  });
});
