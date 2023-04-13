import {
  CatalogAction,
  CatalogActionTypes,
  CatalogState,
} from "../../types/catalog";

const initialState: CatalogState = {
  items: [],
  loading: false,
  error: null,
  page: 1,
  limit: 15,
};

export const catalogReducer = (
  state = initialState,
  action: CatalogAction
): CatalogState => {
  switch (action.type) {
    case CatalogActionTypes.FETCH_CATALOG:
      return {
        ...state,
        loading: true,
      };
    case CatalogActionTypes.FETCH_CATALOG_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case CatalogActionTypes.FETCH_CATALOG_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CatalogActionTypes.REMOVE_FROM_CATALOG:
      return {
        ...state,
        items: [
          ...state.items
            .slice(0, action.payload)
            .concat(...state.items.slice(action.payload + 1)),
        ],
      };
    case CatalogActionTypes.CHANGE_PRODUCT:
      return {
        ...state,
        items: state.items.map((e) =>
          e.id === action.payload.id ? action.payload.data : e
        ),
      };
    case CatalogActionTypes.ADD_PRODUCT:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case CatalogActionTypes.SET_CATALOG_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case CatalogActionTypes.PRICE_SORTING:
      return {
        ...state,
      };
    case CatalogActionTypes.NAME_SORTING:
      return {
        ...state,
      };
    case CatalogActionTypes.CHANGE_LIMIT:
      return {
        ...state,
        limit: action.payload,
      };
    default:
      return state;
  }
};
