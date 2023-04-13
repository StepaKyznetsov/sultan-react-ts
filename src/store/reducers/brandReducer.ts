import { BrandAction, BrandActionTypes, BrandState } from "../../types/brand";

const initialState: BrandState = {
  brands: [],
};

export const brandReducer = (
  state = initialState,
  action: BrandAction
): BrandState => {
  switch (action.type) {
    case BrandActionTypes.SET_CURRENT_BRANDS:
      return {
        ...state,
        brands: action.payload,
      };
    default:
      return state;
  }
};
