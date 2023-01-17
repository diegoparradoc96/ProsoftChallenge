import React from "react";
import { Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/* Components */
//import InputText from "../components/InputText";

export default function PrintScreen(props) {
  const { navigation } = props;
  return (
    <SafeAreaView>
      <Text>Estamos en PrintScreen</Text>
    </SafeAreaView>
  );
}
