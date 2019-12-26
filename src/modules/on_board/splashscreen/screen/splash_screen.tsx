import React from 'react';
import {Text, View} from 'react-native';
import {Navigation} from '../../../../helpers/interfaces';

import {
  TouchableOpacity,
} from 'react-native-gesture-handler';

interface IPropsSplash {
  navigation: Navigation;
}

const SplashScreen = (props: IPropsSplash) => {
  
  const navigateToHome = () => {
    props.navigation.navigate('Home');
  };

  return (
    <View>
      <Text>Splash screen</Text>
      <TouchableOpacity onPress={navigateToHome}>
        <Text onPress={navigateToHome}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SplashScreen;
