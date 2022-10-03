import { View, Alert } from 'react-native'
import React, { useEffect,useState } from 'react'
import {NativeBaseProvider,Text,VStack,Input,Button} from 'native-base'


export default function Vehicle({route}) {
    const [reg_no,setReg_no]=useState('');
    const [description,setDescription]=useState('');


    useEffect(() => {
        setReg_no(route.params.obj.reg_no)
        setDescription(route.params.obj.description)
        // console.log(route.params.obj)
    })

  return (
    <NativeBaseProvider>
    <Text fontSize="2xl" bold underline mt="10%" ml="30%">Update & Delete</Text>
    <VStack space={3} alignItems="center" mt="15%">
    <Input mx="3" placeholder="Reg_no" value={reg_no} onChangeText={(e)=>{setReg_no(e)}} w="80%" />
    <Input mx="3" placeholder="Description" value={description} onChangeText={(e)=>{setDescription(e)}} h="40%"  />
   

            <Button size="md" variant="solid" colorScheme="primary">
                Update Vehicle
            </Button>
            <Button size="md" variant="solid" colorScheme="danger">
                Delete Vehicle
            </Button>
    </VStack>
</NativeBaseProvider>
  )
}