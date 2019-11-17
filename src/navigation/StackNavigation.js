import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from '../screen/Login';
import SignupScreen from '../screen/Signup';
import HomeScreen from '../screen/Home';

const RootStack = createStackNavigator(
  {
    Signup: {
      screen: SignupScreen,
      navigationOptions: {
        header: null,
      },
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(RootStack);
