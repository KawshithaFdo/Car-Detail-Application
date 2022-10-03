import { View, Text, FlatList,TouchableOpacity,StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'


export default function Dashboard(navigation) {

    const[cars,setcars]=useState([]);

    useEffect(() => {

          fetch('http:/192.168.8.196:4000/vehicle')
          .then((response) => response.json())
          .then((json) => setcars(json));

             
    })

  return (
    <View style={{padding:20}}> 
        <TouchableOpacity style={styles.btn}  onPress={()=>{console.log("hi");}}>
                        <Text style={{fontWeight:'bold',color:'white'}}>Add New Vehicle</Text>
                    </TouchableOpacity>
            <FlatList
                data={ cars }
                renderItem={({ item }) =>
                    <TouchableOpacity style={{borderWidth:1, marginBottom:'5%', padding:5}}  onPress={()=>{console.log("hello");}}>
                        <Text style={{marginBottom:10,fontWeight:'bold'}} >{item.reg_no}</Text>
                        <Text style={{marginBottom:10}} >{item.description}</Text>
                    </TouchableOpacity>
                }
            />
        </View>
  )
}

const styles=StyleSheet.create({
    btn:{
        marginTop:'5%',
        width:'100%',
        marginBottom:'10%',
        padding:5,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:100
    }
})