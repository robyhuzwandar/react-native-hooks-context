import * as React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Text, StyleSheet, View} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import ProfileScreen from '../modules/profile/screen/profile_screen';
import CatalogScreen from '../modules/catalog/screen/catalog_screen';
import LoginScreen from '../modules/auth/login/screen/login_screen';
import SplashScreen from '../modules/on_board/splashscreen/screen/splash_screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const AppStack = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
});

const TabStack = createBottomTabNavigator(
  {
    Home: {
      screen: CatalogScreen,
      navigationOptions: () => ({
        tabBarLabel: ({tintColor}: any) => (
          <Text style={{fontSize: 10, color: tintColor}}>Home</Text>
        ),
        tabBarIcon: ({focused, tintColor}) => (
          <View style={styles.svgContainer}>
            <MaterialIcons name={'home'} size={25} color={tintColor} />
          </View>
        ),
      }),
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: ({tintColor}: any) => (
          <Text style={{fontSize: 10, color: tintColor}}>Profile</Text>
        ),
        tabBarIcon: ({focused, tintColor}) => (
          <View style={styles.svgContainer}>
            <MaterialIcons name={'person'} size={25} color={tintColor} />
          </View>
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'orange',
      inactiveTintColor: 'gray',
      showLabel: false,
      style: {
        backgroundColor: '#000000',
        borderTopWidth: 0,
        height: 65,
      },
    },
  }
);

const RootNavigator = createStackNavigator({
  Splash: {
    screen: SplashScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Tab: {
    screen: TabStack,
    navigationOptions: () => ({
      header: null,
    }),
  },
  App: {
    screen: AppStack,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
});

const styles = StyleSheet.create({
  svgContainer: {
    height: 65,
    width: 65,
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  svgIcon: {position: 'absolute', paddingVertical: 30},
});

export default createAppContainer(RootNavigator);
