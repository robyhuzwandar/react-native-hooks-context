import React, {useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Context} from '../../../store';
import getCatalogRepository from '../resource/catalog_repository';

const CatalogScreen = () => {
  const [state, dispatch] = useContext<any>(Context).catalogReducer;

  useEffect(() => {
    void getCatalogRepository(dispatch);
  }, []);

  let renderProfile = <Text>Loading...</Text>;

  if (state.error) {
    renderProfile = (
      <View>
        <Text>Something went wrong: {state.error}</Text>
      </View>
    );
  }

  if (!state.error && state.data && !state.loading) {
    renderProfile = state.data.map((catalog: any, index: number) => {
      return <Text key={index}>{catalog.name}</Text>;
    });
  }

  return renderProfile;
};

export default CatalogScreen;
