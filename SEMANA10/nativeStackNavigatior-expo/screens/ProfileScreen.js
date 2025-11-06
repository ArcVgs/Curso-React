import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ProfileScreen</Text>
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
          navigation.navigate("Account");
        }}
      >
        <Text style={styles.buttonText}>Click to navigate to Account</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
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
    backgroundColor: "orange",
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: "bold",
  },
});
