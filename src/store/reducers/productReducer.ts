import {ProductAction, ProductActionTypes, ProductState} from "../../types/product";

const initialState: ProductState = {
    current: {},
}

export const productReducer = (state = initialState, action: ProductAction): ProductState => {
    switch (action.type) {
        case ProductActionTypes.SET_CURRENT_PRODUCT:
            return {
                ...state, 
                current: action.payload
            }
        default:
            return state
    }
}