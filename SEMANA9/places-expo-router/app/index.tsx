import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pressable style= {{padding: 12, backgroundColor: 'blue', borderRadius: 8}} onPress={()=> router.push('/HomeScreen')}>
        <Text style= {{color: 'white', fontWeight: 'bold'}}>Go To Home</Text>
      </Pressable>
    </View>
  );
}
