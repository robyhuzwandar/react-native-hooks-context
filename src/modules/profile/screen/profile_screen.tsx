import React, {useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Context} from '../../../store';
import getProfileRepository from '../resource/profile_repository';

const ProfileScreen = () => {
  const [state, dispatch] = useContext<any>(Context).profileReducer;

  useEffect(() => {
    void getProfileRepository(dispatch)
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
    renderProfile = state.data.map((profile:any, index:number) => {
      return <Text key={index}>{profile.name}</Text>;
    });
  }

  return renderProfile;
};

export default ProfileScreen;
