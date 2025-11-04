import { Pressable, Text, View } from "react-native";

import { router } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'orange'
      }}
    >
      <Text>Home Page</Text>
      <Pressable style={{padding:12, backgroundColor :'lightblue', borderRadius: 8}} onPress={()=>router.push('../product/123')}>
        <Text>Ver Producto</Text>
      </Pressable>
    </View>
  );
}