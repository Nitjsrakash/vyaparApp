import React from 'react';  
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import CustomerTab from '../../component/TopTab/CustomerTab'
import VenderTab from  '../../component/TopTab/VenderTab'
  
const AppTabNavigator = createMaterialTopTabNavigator(  
    {  
        CustomerTab: CustomerTab,  
        VenderTab: VenderTab,   
    },  
    {  
        tabBarOptions: {  
            activeTintColor: 'white',  
            showIcon: true,  
            showLabel:false,  
            style: {  
                backgroundColor:'red'  
            }  
        },  
    }  
)  
export default AppTabNavigator;  