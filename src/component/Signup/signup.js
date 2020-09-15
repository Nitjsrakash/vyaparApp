import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image, TouchableOpacity, Alert, Dimensions,TextInput
} from 'react-native';
import axios from 'axios'
import NavigationService from '../../utils/NavigationService/NavigationService'


var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;



 class Signup extends Component {

    constructor(props){
        super(props);

        this.state = {
            name:'',
            email:'',
            mobile:'',
            password:'',
        }
    }
    handleName = (text) => {
        this.setState({ name: text })
     }

    handleEmail = (text) => {
    this.setState({ email: text })
    }
    handleMobile = (text) => {
    this.setState({ mobile: text })
    }
    handlePassword = (text) => {
    this.setState({ password: text })
    }
    customerProfilerender(){
        return(
            <ScrollView>
                <View style = {{height:48,width:300,alignSelf:'center',}}>
                    <TextInput
                        // onChangeText={(text) => this.setState(name)}
                        placeholder={'Customer Name'}
                        style={styles.input}
                        onChangeText = {this.handleName}
                        />
                </View>
                <View style = {{height:2,width:300,borderBottomWidth:1,alignSelf:'center',borderBottomColor:'gray'}}></View> 

                <View style = {{height:48,width:300,alignSelf:'center'}}>
                    <TextInput
                        // onChangeText={(text) => this.setState(this.state.MobileNo)}
                        placeholder={'Mobile No'}
                        style={styles.input}
                        onChangeText = {this.handleMobile}
                        />
                </View>
                <View style = {{height:2,width:300,borderBottomWidth:1,alignSelf:'center',borderBottomColor:'gray'}}></View> 

                <View style = {{height:48,width:300,alignSelf:'center'}}>
                    <TextInput
                        // onChangeText={(text) => setUserName(userName)}
                        placeholder={'Email'}
                        style={styles.input}
                        onChangeText = {this.handleEmail}
                        />
                </View>
                <View style = {{height:2,width:300,borderBottomWidth:1,alignSelf:'center',borderBottomColor:'gray'}}></View> 
               
                <View style = {{height:48,width:300,alignSelf:'center',}}>
                    <TextInput
                        // onChangeText={(text) => setUserName(userName)}
                       
                        placeholder={'Password'}
                        style={styles.input}
                        onChangeText = {this.handlePassword}
                        
                        />
                </View>
                <View style = {{height:2,width:300,borderBottomWidth:1,alignSelf:'center',borderBottomColor:'gray'}}></View>  
            </ScrollView>
        )
    }
     saveData(){
        const jsonData = {
            "name":this.state.name,
            "email":this.state.email,
            "Mobile":this.state.mobile,
            "pwd":this.state.password
        }

        console.log("JsonData:",jsonData)
       
         this.getDataUsingPost(jsonData)
     }
     getDataUsingPost(jsonData){
        //POST json 
        // var jsonData =
        //     {
        //         "Mobile":"7678679422",
        //         "pwd":"Sadguru@007"
        //     }
        var dataToSend = {title: 'foo', body: 'bar', userId: 1};
        //making data to send on server
        var formBody = [];
        for (var key in jsonData) {
            console.log("Key:",key)
          var encodedKey = encodeURIComponent(key);
          var encodedValue = encodeURIComponent(jsonData[key]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        //POST request 
        fetch('https://vaporbackend.herokuapp.com/Signup', {
          method: "POST",//Request Type 
          body: formBody,//post body 
          headers: {//Header Defination 
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            // 'Content-Type': 'application/json'
          },
        })
        .then((response) => response.json())
        //If response is in json then in success
        .then((responseJson) => {
            alert(JSON.stringify(responseJson));
            console.log(responseJson);
        })
        //If response is not in json then in error
        .catch((error) => {
          alert(JSON.stringify(error));
          console.error("error:",error);
        });
      }
    
   render(){
     return(
        <View>
           <View style = {styles.MainContainer}>
                <View style = {{height:200,width:330,alignSelf:'center',flexDirection:'column',alignSelf:'center',margin:100}}>
                                {this.customerProfilerender()}
                </View>
                <View style = {{width:"30%", alignSelf:'center',backgroundColor:'blue',height:30,borderRadius:10}}>
                <TouchableOpacity
                    style = {StyleSheet.button}
                    onPress = {()=> this.getDataUsingPost()}
                >
                <Text style= {{color:'white',alignSelf:'center',fontSize:20}}>Submit</Text>
                </TouchableOpacity>
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
    input: {
        width: 300,
        height: 44,
        padding: 5,
        marginTop: 5,
        marginBottom: 5,
        // backgroundColor: '#e8e8e8'
        backgroundColor:'white'
      },
   
  });
 export default Signup;
 
 
