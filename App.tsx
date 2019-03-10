import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './screens/Home';
import Search from './screens/Search';

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: '本棚',
      }
    },
    Search: {
      screen: Search,
      navigationOptions: {
        title: '書籍検索'
      }
    },
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
