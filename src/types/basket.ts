export interface BasketState {
    current: Object;
    loading: boolean;
    error: null | string;
}

export enum BasketActionTypes {
    GET_CURRENT_BASKET = 'GET_CURRENT_BASKET',
    SET_BASKET_SUCCESS = 'SET_BASKET_SUCCESS',
    SET_BASKET_ERROR = 'SET_BASKET_ERROR',
}

interface GetCurrentBasketAction {
    type: BasketActionTypes.GET_CURRENT_BASKET
}
interface SetBasketSuccessAction {
    type: BasketActionTypes.SET_BASKET_SUCCESS;
    payload: object;
}
interface SetBasketErrorAction {
    type: BasketActionTypes.SET_BASKET_ERROR;
    payload: string;
}

export type BasketAction =
    GetCurrentBasketAction
    | SetBasketSuccessAction
    | SetBasketErrorAction