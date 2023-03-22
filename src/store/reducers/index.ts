import {combineReducers} from "redux";
import {catalogReducer} from "./catalogReducer";

export const rootReducer = combineReducers({
    catalog: catalogReducer,
})

export type RootState = ReturnType<typeof rootReducer>