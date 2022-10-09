import { View, Text, FlatList,TouchableOpacity,StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { color } from 'native-base/lib/typescript/theme/styled-system';


export default function Dashboard({navigation,route}) {
    
    const[cars,setcars]=useState([]);

    var name=route.params;

    const deleteuser=()=>{
        fetch('http://192.168.8.196:4000/user/'+name, {
            method: 'DELETE',
        })
            .then((res) =>  {Alert.alert("User Deleted !");
        })
            .then(res => console.log(res))
      }

    useEffect(() => {

          fetch('http:/192.168.8.196:4000/vehicle')
          .then((response) => response.json())
          .then((json) => setcars(json));

             
    })

  return (
    <View style={{padding:20}}>
        <TouchableOpacity style={{borderWidth:0, marginBottom:'5%',marginRight:'73%', padding:5, backgroundColor:'#EA2027', borderRadius:10 }}  onPress={deleteuser}>
                        <Text style={{fontWeight:'bold',color:'white'}}>Delete User</Text>
                    </TouchableOpacity> 
        <TouchableOpacity style={styles.btn}  onPress={()=>{navigation.navigate("NewVehicle")}}>
                        <Text style={{fontWeight:'bold',color:'white'}}>Add New Vehicle</Text>
                    </TouchableOpacity>
            <FlatList
                data={ cars }
                renderItem={({ item }) =>
                    <TouchableOpacity style={{borderWidth:0, marginBottom:'5%', padding:5, backgroundColor:'#74b9ff', borderRadius:10 }}  onPress={()=>{navigation.navigate("Vehicle",{obj:item})}}>
                        <Text style={{marginBottom:10,fontWeight:'bold',color:'#1B1464'}} >{item.reg_no}</Text>
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
        height:'15%',
        marginBottom:'10%',
        padding:5,
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:100
    }
})