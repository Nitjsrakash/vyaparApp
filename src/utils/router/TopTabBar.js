import React from 'react';  
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import CustomerTab from '../../component/TopTab/CustomerTab'
import VenderTab from  '../../component/TopTab/VenderTab'
import Fonts from '../Fonts';
  
const AppTabNavigator = createMaterialTopTabNavigator(  
    {  
        Customer: CustomerTab,  
        Vender: VenderTab, 
       
    },  
    {  
        tabBarOptions: {  
            activeTintColor: 'white',
            // inactiveTintColor:'gray',  
            showIcon: false,  
            showLabel:true,  
            style: {  
                backgroundColor:'red',
            }  
        },  
    }  
)  
export default AppTabNavigator;  