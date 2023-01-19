import React from "react";

import { Button, TouchableOpacity, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome5";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Actualizar usuarios",
          headerTitleAlign: "center",
          headerRight: () => (
            <TouchableOpacity
              //style={styles.modalButton}
              onPress={() => {}}
            >
              <Icon style={styles.icon} name="sync" size={25}></Icon>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 20,
    color: "#1b6dff"
  },
});
