import { StyleSheet, Text, View, Image } from "react-native";
import LottieView from "lottie-react-native";
import Onboarding from "react-native-onboarding-swiper";
import React from "react";
import { useNavigation } from "expo-router";

const OnboardScreen = () => {

  const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Onboarding
      onDone = {handleDone}
      onSkip = {handleDone}
        pages={[
          {
            backgroundColor: "#d4f34aff",
            image: (
              <View>
                <LottieView
                  source={require("../assets/animations/Animation1.json")}
                  style={{ height: 300, width: 300 }}
                  autoPlay
                  loop
                />
                ,
              </View>
            ),
            title: "Onboarding",
            subtitle: "Done with",
          },

            {
            backgroundColor: "#3a6d9cff",
            image: (
              <View>
                <LottieView
                  source={require("../assets/animations/Animation2.json")}
                  style={{ height: 300, width: 300 }}
                  autoPlay
                  loop
                />
                ,
              </View>
            ),
            title: "Onboarding",
            subtitle: "Done with",
          },

                      {
            backgroundColor: "#9a4cadff",
            image: (
              <View>
                <LottieView
                  source={require("../assets/animations/firstprojectjson.json")}
                  style={{ height: 300, width: 300 }}
                  autoPlay
                  loop
                />
                ,
              </View>
            ),
            title: "Onboarding",
            subtitle: "Done with",
          },

        ]}
      />
    </View>
  );
};

export default OnboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
