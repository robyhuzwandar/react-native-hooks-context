import {
  GET_PROFILE_FAILURE,
  GET_PROFILE,
  GET_PROFILE_LOADING,
} from './action.type';

export const initialProfileState = {
  data: [],
  error: null,
  loading: false,
};

export const profileReducer = (state: any, action: any) => {
  switch (action.type) {
    case GET_PROFILE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_PROFILE:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case GET_PROFILE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
