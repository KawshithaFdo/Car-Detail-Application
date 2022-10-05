import { View, Alert } from 'react-native'
import React, { useEffect,useState } from 'react'
import {NativeBaseProvider,Text,VStack,Input,Button} from 'native-base'


export default function Vehicle({ route }) {
    const [reg_no,setReg_no]=useState('');
    const [description,setDescription]=useState('');
   


    useEffect(() => {
        setReg_no(route.params.obj.reg_no)
        setDescription(route.params.obj.description + '' )
    })

    const updateVehicle=()=>{
      fetch('http://192.168.8.196:4000/vehicle', { 
        method: 'PUT',
        body: JSON.stringify({
            reg_no: reg_no,
            description:description, 
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
            .then((response) => {Alert.alert("Successfully Updated !");
        })
            .catch((err)=>Alert.alert('Error:', err.message));
    }

    const deleteVehicle=()=>{
      fetch('http://192.168.8.196:4000/vehicle/'+reg_no, {
          method: 'DELETE',
      })
          .then((res) =>  {Alert.alert("Vehicle Deleted !");})
          .then(res => console.log(res))
    }

 
  return (
    <NativeBaseProvider>
    <Text fontSize="2xl" bold underline mt="10%" ml="30%">Update & Delete</Text>
    <VStack space={8} alignItems="center" mt="15%">
    <Input mx="3" placeholder="Reg_no" value={reg_no} onChangeText={(e)=>{setReg_no(e)}} w="90%" />
    <Input mx="3" placeholder="Description" value={description} onChangeText={(e)=>{setDescription(e)}} h="40%"  />
   

            <Button size="md" variant="solid" colorScheme="primary" onPress={updateVehicle} >
                Update Vehicle
            </Button>
            <Button size="md" variant="solid" colorScheme="danger" onPress={deleteVehicle}>
                Delete Vehicle
            </Button>
    </VStack>
</NativeBaseProvider>
  )
}