import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{headerShown:false,
    headerStyle: {backgroundColor:'#f4511e'},
    headerTitleStyle: {fontWeight: 'bold'}
  }}/>;
}
