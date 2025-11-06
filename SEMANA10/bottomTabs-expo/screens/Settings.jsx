import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Settings = () => {
  return (
    <View style= {styles.container}>
      <Text style={styles.text}>Settings</Text>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'red',
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