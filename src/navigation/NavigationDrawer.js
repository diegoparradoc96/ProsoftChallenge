import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";

//import HomeScreen from "../screens/HomeScreen";
//import PrintScreen from "../screens/PrintScreen";
import HomeNavigation from "../navigation/HomeNavigation";
import PrintNavigation from "../navigation/PrintNavigation";

const Tab = createBottomTabNavigator();

export default function NavigationDrawer() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarLabel: "Usuarios",
          tabBarIcon: ({ color, size }) => (
            <Icon name="save" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Print"
        component={PrintNavigation}
        options={{
          tabBarLabel: "Imprimir PDF",
          tabBarIcon: ({ color, size }) => (
            <Icon name="file-pdf" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
