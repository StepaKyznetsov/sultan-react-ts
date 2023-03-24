import {ProductAction, ProductActionTypes} from "../../types/product";
import {Dispatch} from "redux";

export const getProductById = (id: number, items: any[]) => {

    return async (dispatch: Dispatch<ProductAction>) => {
        try{
            dispatch({type: ProductActionTypes.GET_CURRENT_PRODUCT})
            dispatch({type: ProductActionTypes.SET_PRODUCT_SUCCESS, payload:
                items.filter(e => e.barcode === id)
            })
        }
        catch (e) {
            dispatch({
                type: ProductActionTypes.SET_PRODUCT_ERROR,
                payload: 'Произошла ошибка при загрузке страницы товара'
            })
        }
    }
}