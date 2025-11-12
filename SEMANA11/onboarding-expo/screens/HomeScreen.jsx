import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { useNavigation } from 'expo-router';


const HomeScreen = () => {

  const navigation = useNavigation();

  const handleReset = () => {
    navigation.navigate('Onboarding');
    
  }

  return (
    <View style ={styles.container}>
      <LottieView style={{height: 300, width:300}} source={require('../assets/animations/seotraffic.json')} />
      <Text style={styles.text}>HomeScreen</Text>
      <Pressable style={styles.button} onPress={handleReset}>
        <Text style={styles.buttonText}>Reset</Text>
      </Pressable>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 10,
    color: 'orange'
  },
  button: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
    marginTop:10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  }

})