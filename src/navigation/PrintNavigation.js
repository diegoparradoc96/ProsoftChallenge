import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PrintScreen from "../screens/PrintScreen";

const Stack = createStackNavigator();

export default function PrintNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Print" component={PrintScreen} />
    </Stack.Navigator>
  );
}
