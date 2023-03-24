import {combineReducers} from "redux";
import {basketReducer} from "./basketReducer";
import {catalogReducer} from "./catalogReducer";
import {productReducer} from "./productReducer";

export const rootReducer = combineReducers({
    basket: basketReducer,
    catalog: catalogReducer,
    product: productReducer,
})

export type RootState = ReturnType<typeof rootReducer>