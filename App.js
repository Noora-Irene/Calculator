import React from 'react';
import { createAppContainer } from 'react-navigation';  //luo navigointiolion, jota koko sovellus pystyy käyttämään
import { createStackNavigator } from 'react-navigation-stack';
import Calculation from './Calculation';
import History from './History';

const AppNavi = createStackNavigator(
  {
    Calculator: {screen: Calculation}, // teksti/id ja komponentin nimi
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
  