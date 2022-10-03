import { NativeBaseProvider,Text,Input,Button,Box } from 'native-base'
import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native';


export default function NewUser() {

    const [username,setuserName]=useState('');
    const [address,setAddress]=useState('');
    const [contact,setcontact]=useState('');
    const [password,setpassword]=useState('');

    const saveData=() =>{
        fetch('http://192.168.8.196:4000/user', { 
            method: 'POST',
            body: JSON.stringify({
                username: username,
                address: address,
                contact: contact,
                password:password,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => {Alert.alert("Successfully Created !");
                setAddress('');
                setcontact('');
                setuserName('');
                setpassword('');
        })
            .catch((err)=>Alert.alert('Error:', err.message))

    }

   


  return (
    <NativeBaseProvider>
        <Text fontSize="3xl" bold underline mt="10%" ml="30%">New User</Text>
        <Box alignItems={"center"} padding={15}>

            <Input mx="4" placeholder="User Name" w="80%" borderRadius={100} marginTop={20} value={username} onChangeText={(e)=>{setuserName(e)}}/>
            <Input mx="4" placeholder="Address" w="80%" borderRadius={100} marginTop={5} value={address} onChangeText={(e)=>{setAddress(e)}}/>
            <Input mx="4" placeholder="Contact" w="80%" borderRadius={100} marginTop={5} value={contact} onChangeText={(e)=>{setcontact(e)}}/>
            <Input type='password' mx="4" placeholder="Password"  w="80%" borderRadius={100} marginTop={5} value={password} onChangeText={(e)=>{setpassword(e)}}/>
            <Button size="lg" variant="solid" colorScheme="primary" borderRadius={100} marginTop={8} w={200} onPress={saveData}>
                        Create account
            </Button>
        </Box>
    </NativeBaseProvider>
  )
}