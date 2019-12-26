import { AsyncStorage } from 'react-native';
import { LOCALSTORAGE } from '../constants/localStorage';
import axios from 'axios';
import { ERequest } from '../interfaces';

export const getAxios = (url: string, params?: any) => {
  return AsyncStorage.getItem(
    LOCALSTORAGE.LOCAL_STORAGE_KEYCLOAK_ACCESS_TOKEN
  ).then(token => {
    return axios({
      method: ERequest.GET,
      url,
      params,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }).then((res: any) => {
      return res.data;
    });
  });
};

export const postAxios = (url: string, data: any) => {
  return AsyncStorage.getItem(
    LOCALSTORAGE.LOCAL_STORAGE_KEYCLOAK_ACCESS_TOKEN
  ).then(token => {
    return axios({
      method: ERequest.POST,
      url,
      headers: {
        Authorization: 'Bearer ' + token,
      },
      data,
    }).then((res: any) => {
      return res.data;
    });
  });
};
