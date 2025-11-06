import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style= {styles.headerText}>HomeScreen</Text>
        </View>
        <Text style = {styles.title}>Welcome to travel App</Text>
        <Pressable style= {styles.button} onPress={()=>router.push('/CategoryScreen')}>
            <Text style= {styles.buttonText}>View Destinations</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#44c76bff',
        padding: 20,
        marginBottom: 20,
        marginTop: 50
    },

    headerText:{
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    title:{
        fontSize:25,
        marginBottom: 20,
        marginTop: '50%',
        fontWeight: '600',
    },
    button:{
        width: '80%',
        alignItems: 'center',
        backgroundColor: '#10b160ff',
        padding:15,
        marginTop:40,
        borderRadius:5
    },
    buttonText:{
        color: 'white',
        fontWeight: '600',
        fontSize: 18
    }
})