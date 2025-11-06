import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomeScreen</Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate("Profile");
        }}
      >
        <Text style={styles.buttonText}>Click to navigate to Profile</Text>
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

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
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
    backgroundColor: "white",
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: "bold",
  },
});
