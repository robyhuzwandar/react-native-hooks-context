import {
  NavigationRoute,
  NavigationSwitchProp,
  NavigationParams,
} from 'react-navigation';

export type Navigation = NavigationSwitchProp<
  NavigationRoute,
  NavigationParams
>;

export interface IState {
  data: any;
  dataFetched: boolean;
  isFetching: boolean;
  error: boolean;
}

export enum ERequest {
  POST = 'post',
  GET = 'get',
  PUT = 'put',
  DELETE = 'delete',
  PATCH = 'patch',
}