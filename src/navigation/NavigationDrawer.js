import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

//import HomeScreen from "../screens/HomeScreen";
//import PrintScreen from "../screens/PrintScreen";
import HomeNavigation from "../navigation/HomeNavigation";
import PrintNavigation from "../navigation/PrintNavigation";

const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeNavigation} />
      <Drawer.Screen name="Print" component={PrintNavigation} />
    </Drawer.Navigator>
  );
}
