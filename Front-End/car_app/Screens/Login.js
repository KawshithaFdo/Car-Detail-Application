import React from 'react'
import { NativeBaseProvider,Text,Input,Button,Box } from 'native-base'


export default function Login({navigation}) {

  return (
    <NativeBaseProvider>
        <Text fontSize="3xl" bold underline mt="10%" ml="30%">User Login</Text>
        <Box alignItems={"center"} padding={15}>

            <Input mx="4" placeholder="User Name" w="80%" borderRadius={100} marginTop={20} />
            <Input type='password' mx="4" placeholder="Password"  w="80%" borderRadius={100} marginTop={5} />
            <Button size="lg" variant="solid" colorScheme="primary" borderRadius={100} marginTop={8} w={200} onPress={()=>{navigation.navigate("Dashboard")}} >
                        Login
            </Button>
        </Box>
        <Button size="lg" variant="link" colorScheme="primary"  marginTop={8} w={200} onPress={()=>{navigation.navigate("NewUser")}} >
                      Create an account  
            </Button>
    </NativeBaseProvider>
  )
}
