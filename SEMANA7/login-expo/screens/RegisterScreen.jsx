import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import LoginSvg from '../assets/images/misc/misc/login.svg'
import GoogleSvg from '../assets/images/misc/misc/google.svg'
import FacebookSvg from '../assets/images/misc/misc/facebook.svg'
import TwitterSvg from '../assets/images/misc/misc/twitter.svg'
import Ionicons from '@expo/vector-icons/Ionicons';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import * as Svg from 'react-native-svg';
import React from 'react'

const RegisterScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.viewHeader}>
          <LoginSvg
            width={300}
            height={300}
            style={{ transform: [{ rotate: "-5deg" }] }}
          />
          <Text style={styles.textHeader}>REGISTER</Text>
        </View>

        <View style={styles.containerSocials}>
          <Pressable style={styles.buttonSocial}>
            <GoogleSvg width={30} height={30} />
          </Pressable>
          <Pressable style={styles.buttonSocial}>
            <FacebookSvg width={30} height={30} />
          </Pressable>
          <Pressable style={styles.buttonSocial}>
            <TwitterSvg width={30} height={30} />
          </Pressable>
        </View>

        <Text
          style={{
            textAlign: "center",
            marginVertical: 5,
            fontSize: 16,
            fontWeight: "500",
            color: "gray",
          }}
        >
          {" "}
          O utilice un email para su registro
        </Text>

        <View style={styles.containerInputs}>
          <Ionicons
            name="person-outline"
            size={25}
            color="blue"
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder="Ingrese el usuario"
            style={styles.TextInput}
          />
        </View>

        <View style={styles.containerInputs}>
          <Ionicons
            name="mail"
            size={25}
            color="blue"
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder="Ingrese su e-mail"
            keyboardType="email-address"
            style={styles.TextInput}
          />
        </View>

        <View style={styles.containerInputs}>
          <MaterialCommunityIcons
            name="lock"
            size={25}
            color="blue"
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder="Ingrese su clave"
            secureTextEntry={true}
            style={styles.TextInput}
          />
        </View>

        <View style={styles.containerInputs}>
          <MaterialCommunityIcons
            name="lock"
            size={25}
            color="blue"
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder="Confirme su clave"
            secureTextEntry={true}
            style={styles.TextInput}
          />
        </View>

        <View style={styles.containerInputs}>
          <MaterialCommunityIcons
            name="calendar"
            size={25}
            color="blue"
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder="Ingrese su cumpleaños"
            keyboardType="numeric"
            maxLength={10}
            style={styles.TextInput}
          />
        </View>

        <Pressable style={styles.buttonRegister}>
          <Text style={styles.textButton}>REGISTER</Text>
        </Pressable>

        <View style={styles.containerLogin}>
          <Text>Ya tienes una cuenta</Text>
          <Pressable>
            <Text style={styles.textLogin}>Login</Text>
          </Pressable>

        </View>
      </View>
    </ScrollView>
  );
}

export default RegisterScreen

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
buttonRegister: {
    backgroundColor: 'orange',
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
containerLogin:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
},
textLogin: {
    color: 'red',
    fontWeight: '700',
    fontSize: 16,
    marginLeft: 5,
}

})