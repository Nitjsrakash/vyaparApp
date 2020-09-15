import AppTabNavigator from './TopTabBar'
import RootNavigator from './RootStack'
import { createAppContainer } from 'react-navigation'




export default TopNav =  () =>  createAppContainer(AppTabNavigator,RootNavigator)