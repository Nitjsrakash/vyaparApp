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
import MyHeader from '../Custom/MyHeader';
import NavigationService from '../../utils/NavigationService/NavigationService'

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;



 class AddressScreen extends Component {

  addFormContactrender(){
    return(
        <View>
            <View style = {{flexDirection:'row'}}> 
                <View style = {{width:"80%",}}>
                     <Text style = {{fontStyle:'italic'}}>Add From My Contacts</Text>
                </View>
                <View style = {{width:"20%",}}>
                    <TouchableOpacity
                        style = {StyleSheet.button}
                        onPress = {()=>  NavigationService.navigate('SearchMyContact',)}
                    >
                    <Image  source={require('../../../Assets/Back-Button.png')}
                    style={{transform :[{rotate: '180deg'}] , width: 15, height: 15, resizeMode: "contain" ,tintColor:'gray',margin:5,alignContent:'center',}}></Image>
                    </TouchableOpacity>
                </View> 
            </View> 
            <View style = {{height:2,width:220,borderBottomWidth:1,alignContent:'center',borderBottomColor:'gray'}}></View> 
        </View>
    )
}

   render(){
     return(
        <View>
           <MyHeader noBack={false} title={"Address New Customer"} isTransparent={false}/> 
           <View style = {styles.MainContainer}>
           <View style = {{padding:10,alignSelf:'center',flexDirection:'column',width:250,height:50}}>
                   {this.addFormContactrender()}
               </View>
           </View>
      </View>
     );
   }
 }

 const styles = StyleSheet.create({
    MainContainer: {
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   backgroundColor: '#F5F5F5',
    // backgroundColor:'red',
      // borderWidth:1,
      height:deviceHeight-100,
      width:deviceWidth
    },
   
  });
 export default AddressScreen;