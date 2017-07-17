import { StackNavigator } from 'react-navigation';

import { Animated, Easing } from 'react-native';

import Start from './screens/Start';
import Home from './screens/Home';
import Form from './screens/Form';

const App = StackNavigator({
  Start: { screen: Start },
  Home: { screen: Home },
  Form: { screen: Form },
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#2196F3',
    },
    titleStyle: {
      color: '#fff',
    },
    headerTintColor: '#fff',
  },
  headerMode: 'screen',
  mode: 'card',
  gesturesEnabled: false,
});

export default App;