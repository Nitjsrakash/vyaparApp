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
  StatusBar,AsyncStorage
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import Icon from 'react-native-vector-icons/Ionicons';

  
  
 class HeaderSrceen extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggin: false
    }
  }

  componentWillMount(){
    const data =  AsyncStorage.getItem('isLoging');
      this.setState({isLoggin:data})
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
              false ? <View style={styles.header}>  
              <Icon name='md-menu' size={28} color='white'/>  

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