import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AccountScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
         <Text style={styles.title}>AccountScreen</Text>
         <Pressable
           style={styles.button}
           onPress={() => {
             navigation.navigate("Home");
           }}
         >
           <Text style={styles.buttonText}>Click to navigate to Home</Text>
         </Pressable>
         <Pressable
           style={styles.button}
           onPress={() => {
             navigation.navigate("Profile");
           }}
         >
           <Text style={styles.buttonText}>Click to navigate to Profile</Text>
         </Pressable>
       </View>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: "brown",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  button: {
    padding: 15,
    margin: 10,
    backgroundColor: "purple",
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: "bold",
  },
})