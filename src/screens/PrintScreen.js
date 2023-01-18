import React, { useState, useEffect } from "react";

/* dependencias */
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, TextInput, Text, TouchableOpacity, ToastAndroid } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";

/* Components */
//import InputText from "../components/InputText";

export default function PrintScreen(props) {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formValues) => {
      const { cedula } = formValues;
      console.log("formValues: ", cedula);
    },
  });

  return (
    <KeyboardAwareScrollView>
      <SafeAreaView style={styles.formulario}>
        <Text style={styles.label}>Cedula</Text>
        <TextInput
          placeholder="1121935723"
          style={styles.input}
          autoCapitalize="none"
          value={formik.values.cedula}
          onChangeText={(text) => formik.setFieldValue("cedula", text)}
        />

        <TouchableOpacity
          onPress={formik.handleSubmit}
          style={styles.button}
        >
          <Text style={styles.textButton}>
            Imprimir PDF
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

function initialValues() {
  return {
    cedula: "",
  };
}

function validationSchema() {
  const showToastCedula = () => {
    ToastAndroid.show("Cedula requerida", ToastAndroid.SHORT);
  };

  return {
    cedula: Yup.string().required(() => showToastCedula()),
  };
}

const styles = StyleSheet.create({
  formulario: {
    paddingTop: 0,
    padding: 25,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 15,
  },
  label: {
    marginLeft: 18,
    marginBottom: -10,
    fontWeight: "bold",
    fontSize: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    justifyContent: "center",
    margin: 12,
    height: 45,
    borderRadius: 7,
    backgroundColor: "#ccc",
  },
  textButton: {
    //color: "#1b6dff",
    color: "#343434",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});
