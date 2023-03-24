import {ProductAction, ProductActionTypes, ProductState} from "../../types/product";

const initialState: ProductState = {
    current: {},
    loading: false,
    error: null
}

export const productReducer = (state = initialState, action: ProductAction): ProductState => {
    switch (action.type) {
        case ProductActionTypes.GET_CURRENT_PRODUCT:
            return {...state, loading: true}
        case ProductActionTypes.SET_PRODUCT_SUCCESS:
            return {...state, loading: false, current: action.payload}
        case ProductActionTypes.SET_PRODUCT_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}