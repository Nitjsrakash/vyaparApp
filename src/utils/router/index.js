import React from 'react';
import 'react-native-gesture-handler';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import NavigationService from '../NavigationService/NavigationService'
import RootStack from './RootStack'
import AuthenticationStack from './AuthenticationStack'
import {AsyncStorage,} from 'react-native'
import { floor } from 'react-native-reanimated';





// const Router = (props) => {
  class Router extends React.Component{ 

   constructor(props){
     super(props);
     this.state = {
       isLoging: ''
     }
   }
   
   readData = async () => {
    try {
      const loginKey = await AsyncStorage.getItem('isLoging')
         this.setState({isLoging:loginKey})
    } catch (e) {
      alert('Failed to fetch the data from storage')
    }
  }
  
  componentWillMount(){
     this.readData()
    }
  
  render(){
    console.log("DATA Router:",this.state.isLoging)
    const SwitchNavigator = createAppContainer(
      createSwitchNavigator({
        RootStack: RootStack(),
        AuthenticationStack: AuthenticationStack(),
      }, 
      {
        initialRouteName: this.state.isLoging == 'true' ? "RootStack" : "AuthenticationStack"
      })
    );
    return (
        <SwitchNavigator
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }} 
      />
      
      
     
      
    );
  }
   
  }
export default Router;