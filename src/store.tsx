import React, {createContext, useReducer} from 'react';
import {
  profileReducer,
  initialProfileState,
} from './modules/profile/context/reducer';
import {
  catalogReducer,
  initialKatalogState,
} from './modules/catalog/context/reducer';

const Store = ({children}: any) => {
  const [profileState, profileDispatch] = useReducer(
    profileReducer,
    initialProfileState
  );
  const [katalogState, katalogDispatch] = useReducer(
    catalogReducer,
    initialKatalogState
  );

  const rootReducer = {
    profileReducer: [profileState, profileDispatch],
    catalogReducer: [katalogState, katalogDispatch],
  };

  return <Context.Provider value={rootReducer}>{children}</Context.Provider>;
};

export const Context: any = createContext(null);
export default Store;
