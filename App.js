import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Calculation from './Calculation';
import History from './History';

const AppNavi = createStackNavigator(
  {
    Calculator: {screen: Calculation},
    History: {screen: History}
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#663399',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold',
        },
    })
  }
);
const AppContent= createAppContainer(AppNavi)

export default function App() {
  return (
      <AppContent />
  );
};
  