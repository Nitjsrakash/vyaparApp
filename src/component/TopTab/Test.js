import React, {Component} from 'react';  
import {View,Text,Dimensions} from 'react-native';  
import Icon from 'react-native-vector-icons/Ionicons';  
import FloatingBtn from '../FloatingBtn';


var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

export default class Test extends Component{  
    render() {  
        return(  
            <View style = {{height:deviceHeight,borderWidth:1}}> 
                <View >
                    <Text>This is Home Screen</Text> 
                </View>  
                {/* <FloatingBtn/> */}
            </View>  
        )  
    }  
}  