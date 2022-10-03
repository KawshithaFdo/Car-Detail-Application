import { View, Text } from 'react-native'
import React from 'react'
import Login from './Screens/Login'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import NewUser from './Screens/NewUser';
import Dashboard from './Screens/Dashboard';
import Vehicle from './Screens/Vehicle';
import NewVehicle from './Screens/NewVehicle';

const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="NewUser" component={NewUser} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Vehicle" component={Vehicle} />
      <Stack.Screen name="NewVehicle" component={NewVehicle} />
      
    </Stack.Navigator>
   </NavigationContainer>
     
    
  )
}