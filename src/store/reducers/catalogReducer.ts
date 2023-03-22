import {CatalogAction, CatalogActionTypes, CatalogState} from "../../types/catalog";

const initialState: CatalogState = {
    items: [],
    loading: false,
    error: null,
    page: 1,
    limit: 15
}

export const catalogReducer = (state = initialState, action: CatalogAction): CatalogState => {
    switch (action.type) {
        case CatalogActionTypes.FETCH_CATALOG:
            return {...state, loading: true}
        case CatalogActionTypes.FETCH_CATALOG_SUCCESS:
            return {...state, loading: false, items: action.payload}
        case CatalogActionTypes.FETCH_CATALOG_ERROR:
            return {...state, loading: false, error: action.payload}
        case CatalogActionTypes.SET_CATALOG_PAGE:
            return {...state, page: action.payload}
        default:
            return state
    }
}