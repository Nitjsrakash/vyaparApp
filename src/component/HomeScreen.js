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
import { TextInput } from 'react-native-gesture-handler';
import MyHeader from './Custom/MyHeader';
import FloatingBtn from './FloatingBtn';
import Test from '../component/TopTab/Test'
import axios from 'axios';



var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;



 class HomeScreen extends Component {
   constructor(props){
     super(props);
     this.state = {
       loading:false,
       dataSource:''
     }
   }
  //  vaporbackend.herokuapp.com/fetchCustomers
   componentDidMount(){
     console.log("API CALL")
     
   }


   venderUIrender(){
     return(
       <View style = {{backgroundColor:'red',height:200}}> 
          <Text>Akkashhh</Text>
       </View>
     )
   }
   render(){
     return(
        <View style={styles.MainContainer}>
         <MyHeader noBack={false} title={"Contacts"} isTransparent={false} leftImg ={true}/> 
         <FloatingBtn/>
        <View style = {{borderWidth:1, height:50,width:deviceWidth,flexDirection:'row'}}>
            <View style = {{borderWidth:1,height:50,width:deviceWidth/2,alignItems:'center',justifyContent:'center'}}> 
              <TouchableOpacity
                 style = {StyleSheet.button}
                 onPress = {()=> {this.venderUIrender()}}
              >
                <Text style = {{fontSize:20}}> Customer</Text>
              </TouchableOpacity>
            </View>
            <View style = {{borderWidth:1, height:50,width:deviceWidth/2,alignItems:'center',justifyContent:'center'}}> 
             <TouchableOpacity>
                 <Text style = {{fontSize:20}}> Vender</Text>
                 
             </TouchableOpacity>
             
            </View>
            
        </View>
        
      </View>
     );
   }
 }

 const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
      backgroundColor: '#F5F5F5',
    // backgroundColor:'red',
    //   borderWidth:1
    },
   
  });
 export default HomeScreen;