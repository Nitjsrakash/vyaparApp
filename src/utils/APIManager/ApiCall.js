import constant from '../APIManager/constant'
import Axios from 'axios'

 function getBody(jsonData) {
    try {
        var formBody = [];
        for (var key in jsonData) {
          var encodedKey = encodeURIComponent(key);
          var encodedValue = encodeURIComponent(jsonData[key]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        
        return formBody;
    } catch (e) {
      return false;
     }
  }

export const postFetch = async (jsonData) =>{
  const jsonBody = getBody(jsonData)
  try {
    let response = await fetch(
      'https://vaporbackend.herokuapp.com/Signin',{
        method: "POST",//Request Type 
        body: jsonBody,//post body 
        headers: {//Header Defination 
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        // 'Content-Type': 'application/json'
        },
    })
    let json = await response.json();
    console.log("json:",json)
    return json
  } catch (error) {
    console.error(error);
  }
}
export async function getFetch(){
  console.log("<------API CAll-------->")
  try{
    let res = await fetch('http://dummy.restapiexample.com/api/v1/employees',{
      headers:{
        method: 'GET'
      }
    });
    let result = await res.json();
    console.log("Response:",result)
     return result.data
  }
  catch(error){
    throw error;
  }
}