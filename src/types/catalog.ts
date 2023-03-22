export interface CatalogState {
    items: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum CatalogActionTypes {
    FETCH_CATALOG = 'FETCH_CATALOG',
    FETCH_CATALOG_SUCCESS = 'FETCH_CATALOG_SUCCESS',
    FETCH_CATALOG_ERROR = 'FETCH_CATALOG_ERROR',
    SET_CATALOG_PAGE = 'SET_CATALOG_PAGE'
}

interface FetchCatalogAction {
    type: CatalogActionTypes.FETCH_CATALOG
}
interface FetchCatalogSuccessAction {
    type: CatalogActionTypes.FETCH_CATALOG_SUCCESS;
    payload: any[];
}
interface FetchCatalogErrorAction {
    type: CatalogActionTypes.FETCH_CATALOG_ERROR;
    payload: string;
}
interface SetCatalogPage {
    type: CatalogActionTypes.SET_CATALOG_PAGE;
    payload: number;
}

export type CatalogAction =
    FetchCatalogAction
    | FetchCatalogSuccessAction
    | FetchCatalogErrorAction
    | SetCatalogPage