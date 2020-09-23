import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image, TouchableOpacity, Alert,AsyncStorage
} from 'react-native';

import NavigationService  from '../utils/NavigationService/NavigationService'



 class FloatingBtn extends Component {
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
     return(
       <View>
          {
            this.state.isLoging == 'true' ?  <TouchableOpacity
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
              :  null
          }
       </View>
        
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
      bottom: 50,
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