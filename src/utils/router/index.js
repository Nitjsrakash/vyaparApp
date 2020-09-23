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
       isLoggin: ''
     }
   }
   
  
   
  componentDidMount(){
        const data =  AsyncStorage.getItem('isLoging');
        console.log("DATA:",this.state.isLoggin)
        this.setState({isLoggin:data})
        console.log("DATA:",this.state.isLoggin)
      }
  
  render(){
    const SwitchNavigator = createAppContainer(
      createSwitchNavigator({
        RootStack: RootStack(),
        AuthenticationStack: AuthenticationStack(),
      }, 
      {
        initialRouteName: true ? "RootStack" : "AuthenticationStack"
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