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
export const getFetch = async () => {
  fetch('http://dummy.restapiexample.com/api/v1/employees', {
    method: 'GET'
    //Request Type 
})
.then((response) => response.json())
//If response is in json then in success
.then((responseJson) => {
    //Success 
    console.log(responseJson.data);
    // return responseJson.data
})
//If response is not in json then in error
.catch((error) => {
    //Error 
    console.error(error);
});
}