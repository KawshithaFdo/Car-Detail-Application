import React, { useState } from 'react'
import { NativeBaseProvider,Text,Input,Button,Box } from 'native-base'
import { Alert,ImageBackground,StyleSheet } from 'react-native';


export default function Login({navigation}) {

  const image = { uri: "https://img.freepik.com/premium-vector/registration-sign-up-user-interface-people-using-secure-login-password_566886-2784.jpg?w=996" };


  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');


  const login=()=>{

    fetch('http:/192.168.8.196:4000/user/'+username+'/'+password, {
      method: 'GET',
  })
    // .then((response) => {navigation.navigater("Dashboard");})
    .then((response) =>{
      if(response.status==400){Alert.alert("Password Incorrect.")}
      if(response.status==200){()=>{navigation.navigate("Dashboard")}}
    })
    .then((json) =>console.log(json))
 }
  return (
    <NativeBaseProvider>
       <ImageBackground source={image} style={styles.ImageBackground} >
        <Text fontSize="3xl" bold underline mt="10%" ml="30%" color='blue'>User Login</Text>
        <Box alignItems={"center"} padding={15}>
 
            <Input mx="4" placeholder="User Name" w="80%" value={username} borderRadius={100} onChangeText={(e)=>{setUsername(e)}} marginTop={20} backgroundColor='white'/>
            <Input type='password' mx="4" placeholder="Password" value={password} onChangeText={(e)=>{setPassword(e)}}  w="80%" borderRadius={100} marginTop={5} backgroundColor='white'/>
            <Button size="lg" variant="solid" colorScheme="primary" borderRadius={100}  marginTop={8} w={200} onPress={()=>{navigation.navigate("Dashboard",{username})}} >
                        Login
            </Button>
        </Box>
        <Button size="lg" variant="link" colorScheme="primary"  marginTop={8} w={200} onPress={()=>{navigation.navigate("NewUser")}} >
                      Create an account  
            </Button>
            </ImageBackground>
    </NativeBaseProvider>
  )
}
var styles = StyleSheet.create({

  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch', 
  },

});
