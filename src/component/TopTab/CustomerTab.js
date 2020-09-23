import React, {Component} from 'react';  
import {View,Text,Dimensions,TouchableOpacity,StyleSheet,AsyncStorage, } from 'react-native';  
import Icon from 'react-native-vector-icons/Ionicons';  

import FloatingBtn from '../FloatingBtn';

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

import HeaderScreen from '../Header/HeaderScreen'
import {getFetch} from '../../utils/APIManager/ApiCall'
import { FlatList } from 'react-native-gesture-handler';

export default class CustomerTab extends Component{  
    constructor(props){
        super(props);
        this.state = {
            responseJson:'',
        }
    }

      componentDidMount(){
        getFetch().then(data =>{
            this.setState({
                // isLoading:false,
                responseJson: data
            })
        })
      }
    logOut = async () => {
        try {
          await AsyncStorage.setItem('isLoging', 'false')
        //   alert('Data successfully saved')
        } catch (e) {
          alert('Failed to save the data to the storage')
        }
      }
    render() { 
        console.log("Data Value:",this.state.responseJson)
        return( 
        <View > 
            {this.state.responseJson != ''  ?
               <View>
                    <FlatList
                        data={this.state.responseJson}
                        renderItem={({ item }) => 
                         <Text>
                          {item.employee_name}
                         </Text>
                         }
                        keyExtractor={item => item.id}
                    />
               </View> :null
                }
                <View style = {{width:"30%", alignSelf:'center',backgroundColor:'blue',height:30,borderRadius:10}}>
                  <TouchableOpacity
                      style = {StyleSheet.button}
                      onPress = {()=> this.logOut()}
                  >
                  <Text style= {{color:'white',alignSelf:'center',fontSize:20}}>LogOut</Text>
                  </TouchableOpacity>
                
                </View> 
        </View>     
        )  
    }  
}  
CustomerTab.navigationOptions={  
            tabBarIcon:({tintColor, focused})=>(  
            <Icon  
                name={focused ? 'ios-home' : 'md-home'}  
                color={tintColor}  
                size={25}  
            />  
        )
}  