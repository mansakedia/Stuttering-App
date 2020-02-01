import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import SignInScreen from './Demo/SignInScreen';
import VerifyIDScreen from './Demo/VerifyIDScreen';
import ExerciseScreen from './Demo/ExerciseScreen';
import SocialScreen from './Demo/SocialScreen';
import AllExercise from './Demo/AllExercise';

const RootStack2 = createMaterialTopTabNavigator({
  Assigned: { screen: ExerciseScreen },
  All: { screen: AllExercise },
})

const RootStack = createBottomTabNavigator({
    Exercise: { screen: RootStack2 },
    Social: { screen: SocialScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Exercise') {
          iconName = 'md-stopwatch';
        } else if (routeName === 'Social') {
          iconName = 'md-people';
        }
        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    },
  }
);

// const nextNavigator2 = createSwitchNavigator(
//     {
//       Home: RootStack,
//     },
//     {
//       initialRouteName: 'Home',
//     }
//   );

//createSwitchNavigator
const bottomNavigator = createStackNavigator(
    {
      SignIn: SignInScreen,
      VerifyID: {
        screen: VerifyIDScreen,
        navigationOptions: {
          headerLeft: null
        }
      },
      Main: {
        screen: RootStack,
        navigationOptions: {
          headerLeft: null
        }
      },
    },
    {
      initialRouteName: 'SignIn',
    }
  );
  const AppContainer = createAppContainer(bottomNavigator);
  export default class App extends React.Component {
    render() {
      return <AppContainer />;
    }
  }