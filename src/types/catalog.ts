export interface IChangeProduct {
    data: object;
    id: number;
}

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
    REMOVE_FROM_CATALOG = 'REMOVE_FROM_CATALOG',
    CHANGE_PRODUCT = 'CHANGE_PRODUCT',
    ADD_PRODUCT = 'ADD_PRODUCT',
    SET_CATALOG_PAGE = 'SET_CATALOG_PAGE',
    PRICE_SORTING = 'PRICE_SORTING',
    NAME_SORTING = 'NAME_SORTING',
    CHANGE_LIMIT = 'CHANGE_LIMIT',
}

interface FetchCatalogAction {
    type: CatalogActionTypes.FETCH_CATALOG
}
interface FetchCatalogSuccessAction {
    type: CatalogActionTypes.FETCH_CATALOG_SUCCESS
    payload: any[];
}

interface RemoveFromCatalog {
    type: CatalogActionTypes.REMOVE_FROM_CATALOG
    payload: number;
}

interface ChangeProduct {
    type: CatalogActionTypes.CHANGE_PRODUCT
    payload: IChangeProduct;
}

interface AddProduct {
    type: CatalogActionTypes.ADD_PRODUCT
    payload: object;
}

interface FetchCatalogErrorAction {
    type: CatalogActionTypes.FETCH_CATALOG_ERROR
    payload: string;
}
interface SetCatalogPage {
    type: CatalogActionTypes.SET_CATALOG_PAGE
    payload: number;
}

interface PriceSorting {
    type: CatalogActionTypes.PRICE_SORTING
}

interface NameSorting {
    type: CatalogActionTypes.NAME_SORTING
}

interface ChangeLimit {
    type: CatalogActionTypes.CHANGE_LIMIT
    payload: number;
}

export type CatalogAction =
    FetchCatalogAction
    | FetchCatalogSuccessAction
    | FetchCatalogErrorAction
    | RemoveFromCatalog
    | ChangeProduct
    | AddProduct
    | SetCatalogPage
    | PriceSorting
    | NameSorting
    | ChangeLimit