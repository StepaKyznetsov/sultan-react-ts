import { combineReducers } from "redux";
import { basketReducer } from "./basketReducer";
import { catalogReducer } from "./catalogReducer";
import { productReducer } from "./productReducer";
import { brandReducer } from "./brandReducer";

export const rootReducer = combineReducers({
  basket: basketReducer,
  catalog: catalogReducer,
  product: productReducer,
  brand: brandReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
