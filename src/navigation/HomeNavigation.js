import React, { useState, useEffect } from "react";

/* dependencias */
import { Button, TouchableOpacity, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome5";
import HomeScreen from "../screens/HomeScreen";
import * as SQLite from "expo-sqlite";

/* imports */
import { _getUsuario, _postUsuario } from "../postData";

const Stack = createStackNavigator();

export default function HomeNavigation() {
  /* DB */
  const db = SQLite.openDatabase("usuar.db");
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS usuarios (cedula INTEGER PRIMARY KEY, nombres TEXT, apellidos TEXT, celular TEXT)"
      );
    });

    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM usuarios",
        null,
        (txObj, resultSet) => setUsuarios(resultSet.rows._array),
        (txObj, error) => console.error("joder", error)
      );
    });
  }, []);

  const syncUp = async () => {
    const mongoUsuarios = await _getUsuario();
    console.log("mongoUsuarios: ", mongoUsuarios);
    console.log("localUsuarios: ", usuarios);

    if (mongoUsuarios?.cod_error == "01") {
      // usuarios.forEach(async (usuario) => {
      //   const RES = await _postUsuario(usuario);
      //   console.log("RES:", RES);
      // });
      const res = await _postUsuario(usuarios[0]);
    }
  };

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
              onPress={() => {
                syncUp();
              }}
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
    color: "#1b6dff",
  },
});
