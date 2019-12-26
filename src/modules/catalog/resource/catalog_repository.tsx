import {
  GET_CATALOG,
  GET_CATALOG_FAILURE,
  GET_CATALOG_LOADING,
} from '../context/action.type';
import getCatalog from './catalog_api_provider';

const getCatalogRepository = async (dispatch: any) => {
  dispatch({type: GET_CATALOG_LOADING});
  try {
    const res = await getCatalog();
    dispatch({type: GET_CATALOG, payload: res});
  } catch (error) {
    dispatch({type: GET_CATALOG_FAILURE, payload: error});
  }
};

export default getCatalogRepository;
