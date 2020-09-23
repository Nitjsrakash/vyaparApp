/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,AsyncStorage, Alert
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

  
  
 class HeaderSrceen extends Component {
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
    sideBar(){
      console.log("ok")
      Alert.alert("Ok")
    }
   render(){
     const{} = this.props
     return(
        <View  > 
            <StatusBar  
                backgroundColor='red'  
                barStyle='light-content'  
            /> 
            {
              this.state.isLoging == 'true' ? <View style={styles.header}>  
              <TouchableOpacity
                style = {StyleSheet.button}
                onPress = {()=> this.sideBar() }
              >
              <Icon name='md-menu' size={28} color='white'/>  

              </TouchableOpacity>

              <Icon name='ios-camera' size={28} color='white'/>  
             </View> :
            null
            } 
        </View>  
     );
   }
 }

 const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.White,
    borderWidth:1
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },

  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  wrapper: {  
    flex: 1,  
},  
header:{  
    flexDirection: 'row',  
    alignItems: 'center',  
    justifyContent: 'space-between',  
    backgroundColor: 'red',  
    paddingHorizontal: 18,  
    paddingTop: 5,  
}  
});

 export default HeaderSrceen;