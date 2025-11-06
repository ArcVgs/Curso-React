import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style= {styles.container}>
      <Text style={styles.text}>Profile</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  }, 
  safeArea : {
    flex:1
  },
    text : {
    fontSize: 30,
    fontWeight: '600'
  }
})