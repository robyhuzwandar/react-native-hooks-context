import {
  GET_CATALOG_LOADING,
  GET_CATALOG,
  GET_CATALOG_FAILURE,
} from './action.type';

const initialKatalogState = {
  data: [],
  error: null,
  loading: false,
};

const catalogReducer = (state: any, action: any) => {
  switch (action.type) {
    case GET_CATALOG_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_CATALOG:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case GET_CATALOG_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export {catalogReducer, initialKatalogState};
