import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image, TouchableOpacity, Alert, Dimensions,TextInput,Modal,AsyncStorage
} from 'react-native';

import NavigationService from '../../utils/NavigationService/NavigationService'
import Loader from '../Custom/ActivityIndicator/Loader'

import {getFetch, postFetch} from '../../utils/APIManager/ApiCall'


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
            isLoding:false,
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
    saveData = async () => {
      try {
        await AsyncStorage.setItem('isLoging', 'true')
      } catch (e) {
        alert('Failed to save the data to the storage')
      }
    }
    //  saveData(){
    //     this.setState({isLoding:true})
    
    //       setTimeout ( ()  =>  {
    //         this.setState({isLoding:false})
    //          AsyncStorage.setItem('isLoging', 'true');
    //      },1000);            
    // }
      
    // componentDidMount(){
    //   AsyncStorage.setItem('isLoging', 'true');
    // }
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
   render(){
     return(
        <View>
           <View style = {styles.MainContainer}>
           <Loader
               loading={this.state.isLoding} />
                <Modal
                transparent={true}
                animationType={'none'}
                visible={this.state.isLoding}
                onRequestClose={() => {this.hideModel(false)}} />
                 
                {/* </Modal>     */}
                <View style = {{height:200,width:330,alignSelf:'center',flexDirection:'column',alignSelf:'center',margin:100}}>
                                {this.customerProfilerender()}
                </View>
                <View style = {{width:"30%", alignSelf:'center',backgroundColor:'blue',height:30,borderRadius:10}}>
                  <TouchableOpacity
                      style = {StyleSheet.button}
                      onPress = {()=> this.saveData()}
                  >
                  <Text style= {{color:'white',alignSelf:'center',fontSize:20}}>Submit</Text>
                  </TouchableOpacity>
                
                </View> 
                <View style= {{height:10}}></View>
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
 
 
