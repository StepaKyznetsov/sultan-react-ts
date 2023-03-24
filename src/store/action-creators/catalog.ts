import {CatalogAction, CatalogActionTypes} from "../../types/catalog";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchCatalog = (page = 1, limit = 15) => {
    return async (dispatch: Dispatch<CatalogAction>) => {
        try {
            dispatch({type: CatalogActionTypes.FETCH_CATALOG})
            const response = await axios.get('/catalog.json', {
                params: {_page: page, _limit: limit}
            })
            setTimeout(() => {
                dispatch({type: CatalogActionTypes.FETCH_CATALOG_SUCCESS, payload: response.data})
            }, 500)
        } catch (e) {
            dispatch({
                type: CatalogActionTypes.FETCH_CATALOG_ERROR,
                payload: 'Произошла ошибка при загрузке товаров'
            })
        }
    }
}
export function setCatalogPage(page: number): CatalogAction {
    return {type: CatalogActionTypes.SET_CATALOG_PAGE, payload: page}
}