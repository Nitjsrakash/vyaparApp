import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image, TouchableOpacity, Alert, 
} from 'react-native';

import NavigationService  from '../utils/NavigationService/NavigationService'



 class FloatingBtn extends Component {

    clickHandler = () => {
        // function to handle click on floating Action Button
        // onPress={() => NavigationService.navigate('DetailPage',{itemValue} )}
        // Alert.alert('Floating Button Clicked');
      };
   render(){
     return(
        <TouchableOpacity
          activeOpacity={0.7}
        //   onPress={this.clickHandler}
        onPress={() => NavigationService.navigate('AddCustomer',)}
          style={styles.TouchableOpacityStyle}>
          <Image
            //We are making FAB using TouchableOpacity with an image
            //We are using online image here
             source={{
uri:'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
            }}
            //You can use you project image Example below
            //source={require('./images/float-add-icon.png')}
            style={styles.FloatingButtonStyle}
          />
        </TouchableOpacity>
     );
   }
 }

 const styles = StyleSheet.create({
  
    TouchableOpacityStyle: {
      position: 'absolute',
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      right: 30,
      bottom: 30,
    //   borderWidth:1
    },
  
    FloatingButtonStyle: {
      resizeMode: 'contain',
      width: 50,
      height: 50,
      borderWidth:1
    //   tintColor:'blue'
    //   backgroundColor:'black'
    },
  });
 export default FloatingBtn;