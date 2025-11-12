import { Text, View } from "react-native";
import Navigation from "../navigation/navigation";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={{flex:1}}>
      <Navigation />
    </SafeAreaView>
  );
}
