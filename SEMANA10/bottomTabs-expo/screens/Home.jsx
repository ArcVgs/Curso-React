import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <View style= {styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'orange',
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