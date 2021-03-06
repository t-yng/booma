import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './screens/Home';
import Search from './screens/Search';
import Detail from './screens/Detail';

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
    Detail: {
      screen: Detail,
      navigationOptions: {
        title: '詳細',
      },
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f8f8f8',
      },
    },
  },
);

const App = createAppContainer(MainNavigator);

export default App;
