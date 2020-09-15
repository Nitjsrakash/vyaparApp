import { createStackNavigator } from 'react-navigation-stack';
import FloatingBtn from '../../component/FloatingBtn'
import Signup from '../../component/Signup/signup'


export default AuthenticationStack = () => createStackNavigator({
  Signup: {
    screen: Signup
  },
  
}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
});
