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

    async _getProtectedQuote() {
       
        fetch('http://dummy.restapiexample.com/api/v1/employees', {
          method: "GET",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer ' + DEMO_TOKEN
          }
        })
        .then((response) => response.json())
        .then((responseData) => {
          console.log("Respose Data:",responseData.data)
          setTimeout (() =>{
            this.setState({responseJson:responseData.data})
          },1000)
        })
        .done();
      }
      
      componentDidMount(){
        this._getProtectedQuote()
      }
    
itemrender(item){
    console.log('item:',item)
    return(
        <View>
            <Text>
                 {item.employee_name}
            </Text>
        </View>
    )
}
    render() { 
        return( 
        <View > 
            {this.state.responseJson != ''  ?
               <View>
                    <FlatList
                        data={this.state.responseJson}
                        renderItem={({ item }) => {this.itemrender(item)}}
                        keyExtractor={item => item.id}
                    />
               </View> :null
                }
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