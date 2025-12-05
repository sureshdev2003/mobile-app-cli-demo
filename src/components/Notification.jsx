import { StyleSheet, Text, View,PermissionsAndroid,Alert } from 'react-native'
import React,{useEffect} from 'react'

const Notification = () => {
   const requsetPermission = async()=>{
      try{
        const req=await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS)
          console.log("Permission",req);
          console.log("result=2",PermissionsAndroid.RESULTS.GRANTED);
        if(req===PermissionsAndroid.RESULTS.GRANTED){
          console.log("You can use the notification");
        }else{
         Alert.alert("Notification permission denied");
        }
      }
    catch(err){
      console.log(err);
      
    }}
    useEffect(()=>{
      requsetPermission();
    },[]);
  return (
    <View>
      <Text>Notification</Text>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({})