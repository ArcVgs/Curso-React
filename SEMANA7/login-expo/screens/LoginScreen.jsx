import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import LoginSvg from '../assets/images/misc/misc/login.svg'
import GoogleSvg from '../assets/images/misc/misc/google.svg'
import FacebookSvg from '../assets/images/misc/misc/facebook.svg'
import TwitterSvg from '../assets/images/misc/misc/twitter.svg'
import Ionicons from '@expo/vector-icons/Ionicons';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import * as Svg from 'react-native-svg';
import React from 'react'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.viewHeader}>
            <LoginSvg width={300} height={300} style={{transform:[{rotate: '-5deg'}]}}/>
            <Text style={styles.textHeader}>Login</Text>
        </View>
      
        <View style={styles.containerInputs}>
            <Ionicons name='person-outline' size={25} color='blue' style={{marginRight: 5}}/>
            <TextInput placeholder='Ingrese el usuario' keyboardType='Usuario' style={styles.TextInput}/>
        </View>

        <View style={styles.containerInputs}>
            <MaterialCommunityIcons name='lock' size={25} color='blue' style={{marginRight: 5}}/>
            <TextInput placeholder='Ingrese su clave' secureTextEntry={true} style={styles.TextInput}/>
        </View>

        <Pressable style={styles.buttonLogin}>
            <Text style={styles.textButton}>LOGIN</Text>
        </Pressable>

        <View style={styles.containerSocials}>
            <Pressable style={styles.buttonSocial}>
                <GoogleSvg width={30} height={30}/>
            </Pressable>
            <Pressable style={styles.buttonSocial}>
                <FacebookSvg width={30} height={30}/>
            </Pressable>
            <Pressable style={styles.buttonSocial}>
                <TwitterSvg width={30} height={30}/>
            </Pressable>
        </View>

        <View style={styles.containerRegister}>
            <Text>No tiene una cuenta</Text>
            <Pressable>
                <Text style={styles.textRegister}>Register</Text>
            </Pressable>
        </View>

    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
container: {
    flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
},
viewHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50,
},
textHeader:{
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green',
    marginBottom:20,
},
containerInputs:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0e6c7cff',
    padding:10,
    borderRadius:5,
    borderBottomColor: 'blue',
    borderWidth: 2,
    marginHorizontal: 20,
    marginTop:20,
},
buttonLogin: {
    backgroundColor: 'silver',
    width: '50%',
    padding: 20,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
}, 
textButton:{
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
},
containerSocials:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    marginBottom: 30,
},
buttonSocial: {
    borderRadius: 20,
    borderColor: 'orange',
    borderWidth: 3,
    paddingHorizontal: 30,
    paddingVertical: 10, 
    alignItems: 'center',
    justifyContent: 'center',
},
containerRegister:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
},
textRegister: {
    color: 'red',
    fontWeight: '700',
    fontSize: 16,
    marginLeft: 5,
}

})