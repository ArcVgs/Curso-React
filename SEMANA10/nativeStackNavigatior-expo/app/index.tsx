import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AccountScreen from "../screens/AccountScreen";

const Stack = createNativeStackNavigator(); 

export default function Index() {
  return (
 <Stack.Navigator>
  <Stack.Screen name= "Home" component={HomeScreen}/>
  <Stack.Screen name= "Profile" component={ProfileScreen}/>
  <Stack.Screen name= "Account" component={AccountScreen}/>
 </Stack.Navigator>
  );
}
