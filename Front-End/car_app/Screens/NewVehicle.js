import { NativeBaseProvider,Text,Input,Button,Box } from 'native-base'
import React, { useState } from 'react'
import { Alert,Image,TouchableOpacity,View } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


const options = {
    title: 'Select Image',
    type: 'library',
    options: {
        maxHeight: 200,
        maxWidth:200,
        selectionLimit:1,
        mediaType:'photo',
        includeBase64: false,
    },
}


export default function NewVehicle() {

    const [reg_no,setReg_no]=useState('');
    const [description,setDescription]=useState('');
    const [image,setImage]=useState('');
    
    const openGallery=async()=>{
        const images = await launchImageLibrary(options,response =>{
            const source = {uri: 'data:image/jpeg;base64,' + response.base64};
            setImage(source);
            console.log(image+"img");
        });
     
      
    }
    
   

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

            <Input mx="4" placeholder="Reg_No" w="80%" borderRadius={100} marginTop={10} value={reg_no} onChangeText={(e)=>{setReg_no(e)}}/>
            <Input mx="4" placeholder="Description" h="20%" marginTop={5} value={description} onChangeText={(e)=>{setDescription(e)}}/>

            <View marginTop={15}>
                    <Text style={{fontSize:16,fontWeight:'bold',marginLeft:3,color:'#fff'}}>Image</Text>
                    <Image style={{height:75,width:150,borderWidth:1,borderColor:"#fff",borderRadius:10}}></Image>
                </View>                
                    <View style = {{alignItems:'flex-end',marginBottom:10}}>
                    <TouchableOpacity style = {{width:150}}>
                        <Text style = {{textAlign:'center',fontSize:16,color:'#fff',fontWeight:'bold',padding:5,backgroundColor : "grey",borderRadius:10}}  onPress = {()=> {openGallery()}}  >Add Car</Text>
                    </TouchableOpacity>
                </View> 

            <Button size="lg" variant="solid" colorScheme="primary" borderRadius={100} marginTop={8} w={200} onPress={saveData}>
                        Save 
            </Button>
        </Box>
    </NativeBaseProvider>
  )
}
