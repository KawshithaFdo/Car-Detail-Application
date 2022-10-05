import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'react-native-image-picker';


export default function Image() {

    const localFile = `./assets/icon.jpeg`;
    const [image,setImage] = useState(localFile);


    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        aspect: [4, 3],
        quality: 1,
        });
        if (!result.cancelled) {
              setImage(result.uri);
        }
     };

  return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Image Picker</Text>
            <Image style={styles.roundedImage} source={{uri:image}}/>
            <TouchableOpacity style={styles.button} onPress={()=>{
            pickImage();
            }}>
            <Text style={styles.text}>Choose An Image</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
  
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: '#ffab40',
       alignItems: 'center',
       justifyContent: 'center',
  
    },
    roundedImage:{
       borderRadius:100,
       margin:5,
       height:200,
       width:200
    },
    text:{
      color:'white',
      fontSize:20
    },
    textTitle:{
       color:'white',
       fontSize:60
    },
    button:{
       width:200,
       height:60,
       margin:10,
       alignItems:'center',
       justifyContent:'center',
       borderColor:'white',
       borderWidth:3,
       borderRadius:10
    }
 });