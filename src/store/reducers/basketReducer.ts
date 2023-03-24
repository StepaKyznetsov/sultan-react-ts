import {BasketAction, BasketActionTypes, BasketState} from "../../types/basket";

const initialState: BasketState = {
    current: {},
    loading: false,
    error: null,
}

export const basketReducer = (state = initialState, action: BasketAction): BasketState => {
    switch (action.type) {
        case BasketActionTypes.GET_CURRENT_BASKET:
            return {...state, loading: true}
        case BasketActionTypes.SET_BASKET_SUCCESS:
            return {...state, loading: false, current: action.payload}
        case BasketActionTypes.SET_BASKET_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}