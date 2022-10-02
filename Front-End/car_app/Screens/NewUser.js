import { NativeBaseProvider,Text,Input,Button,Box } from 'native-base'
import React from 'react'

export default function NewUser() {
  return (
    <NativeBaseProvider>
        <Text fontSize="3xl" bold underline mt="10%" ml="30%">New User</Text>
        <Box alignItems={"center"} padding={15}>

            <Input mx="4" placeholder="User Name" w="80%" borderRadius={100} marginTop={20} />
            <Input mx="4" placeholder="Address" w="80%" borderRadius={100} marginTop={5} />
            <Input mx="4" placeholder="Contact" w="80%" borderRadius={100} marginTop={5} />
            <Input type='password' mx="4" placeholder="Password"  w="80%" borderRadius={100} marginTop={5} />
            <Button size="lg" variant="solid" colorScheme="primary" borderRadius={100} marginTop={8} w={200} >
                        Create account
            </Button>
        </Box>
    </NativeBaseProvider>
  )
}