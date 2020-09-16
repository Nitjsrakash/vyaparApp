import { createStackNavigator } from 'react-navigation-stack';
import FloatingBtn from '../../component/FloatingBtn'
import HomeScreen from '../../component/HomeScreen'
import AddCustomer from '../../component/Customer/AddCustomer'
import SearchMyContact from '../../component/SearchContact/SearchMyContact'
import AddressScreen from '../../component/Address/AddressScreen'
import AppTabNavigator from '../router/TopTabBar'



export default RootStack = () => createStackNavigator({
  AppTabNavigator:{
  screen:AppTabNavigator
  },
  HomeScreen: {
    screen: HomeScreen
  },
  AddCustomer:{
    screen:AddCustomer
  },
  SearchMyContact:{
    screen:SearchMyContact
  },
  AddressScreen:{
    screen:AddressScreen
  }
}, 
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
}
);
