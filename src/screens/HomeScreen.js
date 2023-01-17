import React, { useState, useEffect } from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ToastAndroid,
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SafeAreaView } from "react-native-safe-area-context";
import { useFormik } from "formik";
import * as Yup from "yup";

/* Components */

export default function HomeScreen(props) {
  const { navigation } = props;

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formValues) => {
      const { cedula, nombres, apellidos, celular } = formValues;
      console.log("formValues: ", cedula, nombres, apellidos, celular);
    },
  });

  return (
    <KeyboardAwareScrollView>
    <SafeAreaView>
      <Text style={styles.title}>Formulario</Text>

      <Text style={styles.label}>Cedula</Text>
      <TextInput
        placeholder="1121935723"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.cedula}
        onChangeText={(text) => formik.setFieldValue("cedula", text)}
      />

      <Text style={styles.label}>Nombres</Text>
      <TextInput
        placeholder="Luis Enrique"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.nombres}
        onChangeText={(text) => formik.setFieldValue("nombres", text)}
      />

      <Text style={styles.label}>Apellidos</Text>
      <TextInput
        placeholder="Petro Guarin"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.apellidos}
        onChangeText={(text) => formik.setFieldValue("apellidos", text)}
      />

      <Text style={styles.label}>Celular</Text>
      <TextInput
        placeholder="3208275850"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.celular}
        onChangeText={(text) => formik.setFieldValue("celular", text)}
      />

      <TouchableOpacity
        title="Guardar"
        onPress={formik.handleSubmit}
        style={styles.button}
      >
        <Text style={styles.textButton}>Guardar</Text>
      </TouchableOpacity>
      {/* <Text style={styles.error}>{formik.errors.codigo}</Text> */}
      {/* <Text style={styles.error}>{formik.errors.nombre}</Text> */}
    </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

function initialValues() {
  return {
    cedula: "",
    nombres: "",
    apellidos: "",
  };
}

function validationSchema() {
  const showToastCedula = () => {
    ToastAndroid.show("Cedula requerida", ToastAndroid.SHORT);
  };
  const showToastNombres = () => {
    ToastAndroid.show("Nombre requerido", ToastAndroid.SHORT);
  };
  const showToastApellidos = () => {
    ToastAndroid.show("Apellidos requerido", ToastAndroid.SHORT);
  };
  const showToastCelular = () => {
    ToastAndroid.show("Celular requerido", ToastAndroid.SHORT);
  };

  return {
    cedula: Yup.string().required(() => showToastCedula()),
    nombres: Yup.string().required(() => showToastNombres()),
    apellidos: Yup.string().required(() => showToastApellidos()),
    celular: Yup.string().required(() => showToastCelular()),
  };
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
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
    backgroundColor: "#1b6dff",
  },
  textButton: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  error: {
    textAlign: "center",
    color: "#f00",
    marginTop: 20,
  },
});