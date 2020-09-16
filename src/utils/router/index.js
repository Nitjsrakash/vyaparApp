import React from 'react';
import 'react-native-gesture-handler';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import NavigationService from '../NavigationService/NavigationService'
import RootStack from './RootStack'
import AuthenticationStack from './AuthenticationStack'






// const Router = (props) => {
  class Router extends React.Component{ 

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