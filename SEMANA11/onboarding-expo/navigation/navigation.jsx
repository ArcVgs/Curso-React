import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import OnboardScreen  from '../screens/OnboardScreen';

const Stack = createNativeStackNavigator();
const navigation = () => {
  return (
<Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Onboarding'>
    <Stack.Screen name = 'Home' component={HomeScreen} />
    <Stack.Screen name = 'Onboarding' component={OnboardScreen} />
</Stack.Navigator>
  )
}

export default navigation

const styles = StyleSheet.create({})