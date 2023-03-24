import {BasketAction, BasketActionTypes} from "../../types/basket";
import {Dispatch} from "redux";

export const getCurrentBasket = (page = 1, limit = 15) => {
    return async (dispatch: Dispatch<BasketAction>) => {
        try {
            dispatch({type: BasketActionTypes.GET_CURRENT_BASKET})

            setTimeout(() => {
                dispatch({type: BasketActionTypes.SET_BASKET_SUCCESS, payload: {}})
            }, 500)
        } catch (e) {
            dispatch({
                type: BasketActionTypes.SET_BASKET_ERROR,
                payload: 'Произошла ошибка при загрузке товаров'
            })
        }
    }
}