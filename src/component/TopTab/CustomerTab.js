import React, {Component} from 'react';  
import {View,Text,Dimensions} from 'react-native';  
import Icon from 'react-native-vector-icons/Ionicons';  
import FloatingBtn from '../FloatingBtn';

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

export default class CustomerTab extends Component{  
    render() {  
        return( 
        <View style = {{height:deviceHeight-125}}> 
            <View >
                <Text>This is Home Screen</Text> 
            </View>  
            <FloatingBtn/>
        </View>     
        )  
    }  
}  
CustomerTab.navigationOptions={  
            tabBarIcon:({tintColor, focused})=>(  
            <Icon  
                name={focused ? 'ios-home' : 'md-home'}  
                color={tintColor}  
                size={25}  
            />  
        )
}  