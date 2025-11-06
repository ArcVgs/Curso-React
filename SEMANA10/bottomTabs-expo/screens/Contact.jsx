import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Contact = () => {
  return (
    <View style= {styles.container}>
      <Text style={styles.text}>Contact</Text>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'blue',
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