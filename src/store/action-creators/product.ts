import {ProductAction, ProductActionTypes} from "../../types/product";
import {Dispatch} from "redux";

export const getProductById = (id: number, items: any[]) => {
    return (dispatch: Dispatch<ProductAction>) => {
        dispatch({type: ProductActionTypes.SET_CURRENT_PRODUCT, payload:
            items.filter(e => e.barcode === id)
        })
    }  
}