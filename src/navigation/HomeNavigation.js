import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{title: "Actualizar usuarios", headerTitleAlign: "center"}} />
    </Stack.Navigator>
  );
}
