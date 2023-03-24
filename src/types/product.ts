export interface ProductState {
    current: Object;
    loading: boolean;
    error: null | string;
}

export enum ProductActionTypes {
    GET_CURRENT_PRODUCT = 'GET_CURRENT_PRODUCT',
    SET_PRODUCT_SUCCESS = 'SET_PRODUCT_SUCCESS',
    SET_PRODUCT_ERROR = 'SET_PRODUCT_ERROR',
}

interface GetCurrentProductAction {
    type: ProductActionTypes.GET_CURRENT_PRODUCT
}
interface SetProductSuccessAction {
    type: ProductActionTypes.SET_PRODUCT_SUCCESS;
    payload: object;
}
interface SetProductErrorAction {
    type: ProductActionTypes.SET_PRODUCT_ERROR;
    payload: string;
}

export type ProductAction =
    GetCurrentProductAction
    | SetProductSuccessAction
    | SetProductErrorAction