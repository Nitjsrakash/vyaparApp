import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image, TouchableOpacity, Alert, Dimensions,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import AddressScreen from '../Address/AddressScreen';
import MyHeader from '../Custom/MyHeader';
import ContactList from './ContactList';

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;



 class SearchMyContact extends Component {

    constructor(props){
        super(props);
        this.state ={
          dataList:[
            {id:'1',name:'Akash',mobileNo: '99999999999',image:'../../../Assets/download.jpg'},
            {id:'2',name:'Rahul',mobileNo: '99999999999',image:'../../../Assets/download.jpg'},
            {id:'3',name:'Ram',mobileNo: '99999999999',image:'../../../Assets/download.jpg'},
            {id:'4',name:'Kapil',mobileNo: '99999999999',image:'../../../Assets/download.jpg'},
            {id:'5',name:'Raju',mobileNo: '99999999999',image:'../../../Assets/download.jpg'},
            {id:'6',name:'Akash',mobileNo: '99999999999',image:'../../../Assets/download.jpg'},
            {id:'7',name:'Rahul',mobileNo: '99999999999',image:'../../../Assets/download.jpg'},
            {id:'8',name:'Ram',mobileNo: '99999999999',image:'../../../Assets/download.jpg'},
            {id:'9',name:'Kapil',mobileNo: '99999999999',image:'../../../Assets/download.jpg'},
            {id:'10',name:'Raju',mobileNo: '99999999999',image:'../../../Assets/download.jpg'},
            {id:'11',name:'Akash',mobileNo: '99999999999',image:'../../../Assets/download.jpg'},
            {id:'12',name:'Rahul',mobileNo: '99999999999',image:'../../../Assets/download.jpg'},
            {id:'13',name:'Ram',mobileNo: '99999999999',image:'../../../Assets/download.jpg'},
            {id:'14',name:'Kapil',mobileNo: '99999999999',image:'../../../Assets/download.jpg'},
            {id:'15',name:'Raju',mobileNo: '99999999999',image:'../../../Assets/download.jpg'},
            
          ]
        };
      }

    addFormContactrender(){
        return(
            <View>
                <View style = {{flexDirection:'row',alignSelf:'center'}}> 
                    <Text style = {{fontStyle:'italic'}}>My From Contacts</Text>
                </View> 
            </View>
        )
    }

   render(){
     return(
        <View>
           <MyHeader noBack={false} title={"Search Contact"} isTransparent={false}/> 
           <View style = {styles.MainContainer}>
           <View style = {{alignSelf:'center',padding:10,flexDirection:'column',width:250,height:30}}>
                   {this.addFormContactrender()}
            </View>
            {/* <ScrollView> */}
                <View style = {{alignSelf:'center',margin:10,flexDirection:'column',}}>
                    <FlatList
                        data = {this.state.dataList}
                        renderItem = {({item}) =>
                            <ContactList
                                data = {item}
                            />
                        }
                    keyExtractor = {item => item.id}
                />  
                </View>
            {/* </ScrollView> */}
            
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
      borderWidth:1,
      height:deviceHeight,
      width:deviceWidth
    },
   
  });
 export default SearchMyContact;