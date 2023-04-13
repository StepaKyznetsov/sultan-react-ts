interface Item {
  data: Object;
  counter: number;
  id: number;
}

export interface BasketState {
  order: Item[];
  error: null | string;
}

export enum BasketActionTypes {
  REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET",
  ADD_TO_BASKET = "ADD_TO_BASKET",
  RESET_BASKET = "RESET_BASKET",
  CHANGE_PRODUCT_COUNTER = "CHANGE_PRODUCT_COUNTER",
}

interface RemoveFromBasket {
  type: BasketActionTypes.REMOVE_FROM_BASKET;
  payload: number;
}

interface AddToBasket {
  type: BasketActionTypes.ADD_TO_BASKET;
  payload: Item;
}

interface ResetBasket {
  type: BasketActionTypes.RESET_BASKET;
}

interface ChangeProductCounter {
  type: BasketActionTypes.CHANGE_PRODUCT_COUNTER;
  payload: number[];
}

export type BasketAction =
  | RemoveFromBasket
  | AddToBasket
  | ResetBasket
  | ChangeProductCounter;
