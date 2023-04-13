import { CatalogAction, CatalogActionTypes } from "../../types/catalog";
import { Dispatch } from "redux";
import axios from "axios";
import { IChangeProduct } from "../../types/catalog";

export const fetchCatalog = (page = 1, limit = 15) => {
  return async (dispatch: Dispatch<CatalogAction>) => {
    try {
      dispatch({
        type: CatalogActionTypes.FETCH_CATALOG,
      });
      const response = await axios.get("/catalog.json", {
        params: {
          _page: page,
          _limit: limit,
        },
      });
      setTimeout(() => {
        dispatch({
          type: CatalogActionTypes.FETCH_CATALOG_SUCCESS,
          payload: response.data,
        });
      }, 500);
    } catch (e) {
      dispatch({
        type: CatalogActionTypes.FETCH_CATALOG_ERROR,
        payload: "Произошла ошибка при загрузке товаров",
      });
    }
  };
};

export const setCatalogPage = (page: number): CatalogAction => {
  return {
    type: CatalogActionTypes.SET_CATALOG_PAGE,
    payload: page,
  };
};

export function addProduct(items: any[], product: object): CatalogAction {
  const id = items.slice(-1)[0].id + 1;
  return {
    type: CatalogActionTypes.ADD_PRODUCT,
    payload: {
      id,
      ...product,
    },
  };
}

export function changeProduct(product: IChangeProduct): CatalogAction {
  return {
    type: CatalogActionTypes.CHANGE_PRODUCT,
    payload: {
      data: product.data,
      id: product.id,
    },
  };
}

export function removeFromCatalog(id: number, items: any[]): CatalogAction {
  return {
    type: CatalogActionTypes.REMOVE_FROM_CATALOG,
    payload: items.findIndex((e) => e.id === id),
  };
}

export function changeLimit(limit: number): CatalogAction {
  return {
    type: CatalogActionTypes.CHANGE_LIMIT,
    payload: limit,
  };
}
