import { NativeBaseProvider,Text,Input,Button,Box } from 'native-base'
import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native';


export default function NewVehicle() {

    const [reg_no,setReg_no]=useState('');
    const [description,setDescription]=useState('');
    
   

    const saveData=() =>{
        fetch('http://192.168.8.196:4000/vehicle', { 
            method: 'POST',
            body: JSON.stringify({
                reg_no: reg_no,
                description: description,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => {Alert.alert("Successfully Saved !");
                setDescription('');
                setReg_no('');
        })
            .catch((err)=>Alert.alert('Error:', err.message))

    }

   


  return (
    <NativeBaseProvider>
        <Text fontSize="3xl" bold underline mt="10%" ml="30%">New Vehicle</Text>
        <Box alignItems={"center"} padding={15}>

            <Input mx="4" placeholder="Reg_No" w="80%" borderRadius={100} marginTop={20} value={reg_no} onChangeText={(e)=>{setReg_no(e)}}/>
            <Input mx="4" placeholder="Description" h="40%" marginTop={5} value={description} onChangeText={(e)=>{setDescription(e)}}/>
            <Button size="lg" variant="solid" colorScheme="primary" borderRadius={100} marginTop={8} w={200} onPress={saveData}>
                        Save 
            </Button>
        </Box>
    </NativeBaseProvider>
  )
}