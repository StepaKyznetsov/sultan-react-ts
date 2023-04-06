import {Brand, BrandAction, BrandActionTypes} from "../../types/brand";
import {Dispatch} from "redux";
import {getBrands} from "../../utils";

export const setCurrentBrands = (arr: any[], brands: Brand[]) => {
    return (dispatch: Dispatch<BrandAction>) => {
        let resultBrand = getBrands(arr, brands)
        dispatch({
            type: BrandActionTypes.SET_CURRENT_BRANDS,
            payload: resultBrand
        })
    }  
}