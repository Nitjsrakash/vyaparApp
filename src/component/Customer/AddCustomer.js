import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image, TouchableOpacity, Alert, Dimensions,TextInput,KeyboardAvoidingView
} from 'react-native';
import MyHeader from '../Custom/MyHeader';
import NavigationService from '../../utils/NavigationService/NavigationService'
import {colors} from  "../Custom/Colors"
var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;



 class AddCustomer extends Component {

      constructor(props){
       super(props);
       this.state = {
         customerName:'',
         MobileNo:'',
         email:'',
         address:'',
         gstType:'',
         openingBalance:'',
       }
      }

    SaveBtnrender(){
        return(
            <View style = {{alignItems:'center',borderRadius:10,height:50,width:200,alignSelf:'center',justifyContent:'center',backgroundColor:colors.colorPrimary,}}>
                <TouchableOpacity
                style = {StyleSheet.buutton}
                onPress = {() => NavigationService.navigate() }
                >
                <Text style = {{fontSize:20,color:'white'}}>Save</Text>           
                </TouchableOpacity>
            </View>
        )
    };
    _scrollToInput() {
        const scrollResponder = this.ref.myScrollView.getScrollResponder();
        const inputHandle = React.findNodeHandle(this.ref.myInput)
      
        scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
          inputHandle, // The TextInput node handle
          0, // The scroll view's bottom "contentInset" (default 0)
          true // Prevent negative scrolling
        );
    };
    customerProfilerender(){
        return(
            <KeyboardAvoidingView style={{flexGrow: 1}} behavior="padding" enabled>
              <View style={styles.container}>
                <View style = {{height:48,width:300,alignSelf:'center'}}>
                    <TextInput
                        // onChangeText={(text) => setUserName(userName)}
                       
                        placeholder={'Customer Name'}
                        style={styles.input}
                        
                        />
                </View>
                <View style = {{height:2,width:300,borderBottomWidth:1,alignSelf:'center',borderBottomColor:'gray'}}></View> 

                <View style = {{height:48,width:300,alignSelf:'center'}}>
                    <TextInput
                        // onChangeText={(text) => this.setState(this.state.MobileNo)}
                        placeholder={'Mobile No'}
                        style={styles.input}
                       
                        />
                </View>
                <View style = {{height:2,width:300,borderBottomWidth:1,alignSelf:'center',borderBottomColor:'gray'}}></View> 

                <View style = {{height:48,width:300,alignSelf:'center'}}>
                    <TextInput
                        // onChangeText={(text) => setUserName(userName)}
                        placeholder={'Email'}
                        style={styles.input}
                        
                        />
                </View>
                <View style = {{height:2,width:300,borderBottomWidth:1,alignSelf:'center',borderBottomColor:'gray'}}></View> 

                <View style = {{height:48,width:300,alignSelf:'center'}}>
                    <TouchableOpacity
                            style = {StyleSheet.button}
                            onPress = {()=>  NavigationService.navigate('AddressScreen',)}
                        >
                            <Text style={styles.input}>Address</Text>
                        {/* <TextInput
                        // onChangeText={(text) => setUserName(userName)}
                        placeholder={'Address'}
                        style={styles.input}
                        ref="myInput"
                        onFocus={this._scrollToInput.bind(this)}
                        /> */}
                    </TouchableOpacity>
                </View>
        
                <View style = {{height:2,width:300,borderBottomWidth:1,alignSelf:'center',borderBottomColor:'gray'}}></View> 
               
                <View style = {{height:48,width:300,alignSelf:'center'}}>
                    <TextInput
                        // onChangeText={(text) => setUserName(userName)}
                        placeholder={'GST Type'}
                        style={styles.input}
                       
                        />
                </View>
                <View style = {{height:2,width:300,borderBottomWidth:1,alignSelf:'center',borderBottomColor:'gray'}}></View> 

                <View style = {{height:48,width:300,alignSelf:'center'}}>
                    <TextInput
                        // onChangeText={(text) => setUserName(userName)}
                       
                        placeholder={'Opening Balance'}
                        style={styles.input}
                       
                        />
                </View>
                <View style = {{height:2,width:300,borderBottomWidth:1,alignSelf:'center',borderBottomColor:'gray'}}></View> 
           
            </View>
            </KeyboardAvoidingView>
        )
    }
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
                        style={{ transform :[{rotate: '180deg'}],width: 15, height: 15, resizeMode: "contain" ,tintColor:'gray',margin:5,alignContent:'center',}}></Image>
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
           <MyHeader noBack={false} title={"Add Customer"} isTransparent={false}/> 
           <ScrollView>
           <View style = {styles.MainContainer}>
               
                    <View style = {{padding:10,alignSelf:'center',flexDirection:'column',width:250,height:50}}>
                        {this.addFormContactrender()}
                    </View>
                   
                        <View style = {{height:330,width:330,alignSelf:'center',flexDirection:'column'}}>
                            {this.customerProfilerender()}
                        </View>
                   
                   

                    <View style = {{height:50,width:300,alignSelf:'center',flexDirection:'column',margin:30}}>
                            {this.SaveBtnrender()}
                    </View>
           </View>
           </ScrollView>
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
    //   borderWidth:1,
      height:deviceHeight-100,
      width:deviceWidth,
      resizeMode: 'contain',
    },
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
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
    // input: {
    //     backgroundColor: '#DAE1F1',
    //     width: deviceWidth - 100,
    //     height: 40,
    //     marginHorizontal: 20,
    //     borderRadius: 20,
    //     color: '#333333',
    //     marginBottom: 30,
    //     paddingLeft: 15
    // },
   
  });
 export default AddCustomer;