import {
  BasketAction,
  BasketActionTypes,
  BasketState,
} from "../../types/basket";

const initialState: BasketState = {
  order: [],
  error: null,
};

export const basketReducer = (
  state = initialState,
  action: BasketAction
): BasketState => {
  switch (action.type) {
    case BasketActionTypes.REMOVE_FROM_BASKET:
      return {
        ...state,
        order: [
          ...state.order
            .slice(0, action.payload)
            .concat(...state.order.slice(action.payload + 1)),
        ],
      };
    case BasketActionTypes.ADD_TO_BASKET:
      return {
        ...state,
        order: [...state.order, action.payload],
      };
    case BasketActionTypes.RESET_BASKET:
      return {
        ...state,
        order: [],
      };
    case BasketActionTypes.CHANGE_PRODUCT_COUNTER:
      return {
        ...state,
        order: state.order.map((e) =>
          e.id === action.payload[0]
            ? {
                ...e,
                counter: e.counter + action.payload[1],
              }
            : e
        ),
      };
    default:
      return state;
  }
};
