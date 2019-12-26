import getProfile from "./profile_api_provider";
import { GET_PROFILE, GET_PROFILE_FAILURE, GET_PROFILE_LOADING } from "../context/action.type";

const getProfileRepository = async (dispatch: any)  =>{
  dispatch({type: GET_PROFILE_LOADING});
  try {
    const res = await getProfile();
    dispatch({type: GET_PROFILE, payload: res});
  } catch (error) {
    dispatch({type: GET_PROFILE_FAILURE, payload: error});
  }
}

export default getProfileRepository;