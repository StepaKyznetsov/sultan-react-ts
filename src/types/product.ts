export interface ProductState {
    current: Object;
    error: null | string;
}

export enum ProductActionTypes {
    SET_CURRENT_PRODUCT = 'SET_CURRENT_PRODUCT',
}

interface SetCurrentProductAction {
    type: ProductActionTypes.SET_CURRENT_PRODUCT;
    payload: Object;
}

export type ProductAction = SetCurrentProductAction