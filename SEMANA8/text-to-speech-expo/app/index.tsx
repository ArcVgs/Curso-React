import { useState } from "react";
import { Text, View, StyleSheet, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Speech from "expo-speech";

export default function Index() {
  const [text, setText] = useState("");
  const speekText = () => {
    if (text.trim().length === 0) {
      alert("Ingrese un texto");
      return;
    }
    Speech.speak(text);
  };
  return (
    <SafeAreaView style={style.safeArea}>
      <View style={style.container}>
        <Text style={style.title}>Text to Speech.</Text>
        <TextInput
          style={style.input}
          placeholder="Ingrese un texto"
          textAlign="center"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <Pressable style={style.button} onPress={speekText}>
          <Text style={style.textButton}>♫ SPEAK</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "red",
  },
  container: {
    flex: 1,
    paddingHorizontal: 50,
    backgroundColor: "#506fd4ff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 50,
  },
  input: {
    height: 50,
    width: "90%",
    borderColor: "orange",
    borderWidth: 5,
    borderRadius: 10,
    margin: 15,
    padding: 5,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "silver",
    borderRadius: 10,
    margin: 20,
  },
  textButton: {
    color: "brown",
    fontWeight: "bold",
    fontSize: 20,
  },
});
