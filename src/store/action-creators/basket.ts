import {BasketAction, BasketActionTypes} from "../../types/basket";
import {Dispatch} from "redux";

export const addToBasket = (barcode: number, items: any[], current: any[], counter: number) => {

    return (dispatch: Dispatch<BasketAction>) => {
        if (current.filter(e => e.data[0].barcode === barcode).length !== 0) {
          return dispatch({
            type: BasketActionTypes.CHANGE_PRODUCT_COUNTER, 
            payload: [
                barcode,
                counter
            ]
        })
        } 
        dispatch({
            type: BasketActionTypes.ADD_TO_BASKET, 
            payload:{
                data: items.filter(e => e.barcode === barcode), 
                counter, 
                id: barcode
            }
        })
    }       
}

export const resetBasket = () => {
    return (dispatch: Dispatch<BasketAction>) => {
        dispatch({
            type: BasketActionTypes.RESET_BASKET
        })
    }  
}

export const removeFromBasket = (barcode: number, items: any[]) => {
    return (dispatch: Dispatch<BasketAction>) => {
        dispatch({
            type: BasketActionTypes.REMOVE_FROM_BASKET,
            payload: items.findIndex(e => e.id === barcode)
       })
    }  
}


