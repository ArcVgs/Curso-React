import { StyleSheet, Text, View } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Home from "../screens/Home";
import Contact from "../screens/Contact";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings"
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const Navigation = () => {
  return (
    <Tab.Navigator screenOptions={{ 
        headerShown: false, 
        tabBarLabelPosition: 'below-icon',
        //tabBarIconStyle: {display:"none"}
    }} 
    initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} options={{tabBarIcon: ()=><FontAwesome name = 'home' size={25} color='skyblue'/>}}/>
      <Tab.Screen name="Contact" component={Contact} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
    
  );
};

export default Navigation;

const styles = StyleSheet.create({});
