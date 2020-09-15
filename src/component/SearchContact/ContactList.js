import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image, TouchableOpacity, Alert, Dimensions
} from 'react-native';


var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;



 class ContactList extends Component {

   render(){
       const data = this.props.data
      
       console.log("Data:",data)
     return(
         <ScrollView>
            <View style = {{flexDirection:'column'}}>
                <View style = {{height:55,width:300,alignSelf:'center',flexDirection:'row', backgroundColor: 'white',}}>
                    <View style = {{height:50,width:100,alignSelf:'center'}}>
                        <Image  style={{height:45,width:58,borderRadius:5,alignSelf:'center'}} 
                            source={require('../../../Assets/download.jpg')}
                        /> 
                    </View>
                    <View style = {{alignSelf:'center',flexDirection:'column',width:200}}>
                        <Text>{data.name}</Text>
                        <Text>{data.mobileNo}</Text>
                    </View>
                </View>
                
                <View style = {{height:2,width:300,borderBottomWidth:1,alignSelf:'center',borderBottomColor:'gray',marginBottom:10}}></View> 
        </View>
      </ScrollView>
     );
   }
 }

 const styles = StyleSheet.create({
   
  });
 export default ContactList;