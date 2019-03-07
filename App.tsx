import React from 'react';
import Home from './screens/Home';
import Search from './screens/Search';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const MainNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    Search: {screen: Search},
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f8f8f8',
        marginBottom: 20,
      },
    },
  },
);

const App = createAppContainer(MainNavigator);

export default App;
