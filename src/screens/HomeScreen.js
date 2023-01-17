import React, { useState, useEffect } from "react";
import {
  Text,
  Button,
  StyleSheet,
  TextInput,
  ToastAndroid,
} from "react-native";
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
      const { codigo, nombre } = formValues;
      console.log("formValues: ", codigo, nombre);
    },
  });

  return (
    <SafeAreaView>
      <Text style={styles.title}>Formulario</Text>
      <TextInput
        placeholder="Codigo"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.codigo}
        onChangeText={(text) => formik.setFieldValue("codigo", text)}
      />
      <TextInput
        placeholder="Nombre"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.nombre}
        onChangeText={(text) => formik.setFieldValue("nombre", text)}
      />
      <Button
        title="Guardar"
        onPress={formik.handleSubmit}
        style={styles.button}
      />
      {/* <Text style={styles.error}>{formik.errors.codigo}</Text> */}
      {/* <Text style={styles.error}>{formik.errors.nombre}</Text> */}
    </SafeAreaView>
  );
}

function initialValues() {
  return {
    codigo: "",
    nombre: "",
  };
}

function validationSchema() {
  const showToastCodigo = () => {
    ToastAndroid.show("El codigo es obligatorio", ToastAndroid.SHORT);
  };
  const showToastNombre = () => {
    ToastAndroid.show("El nombre es obligatorio", ToastAndroid.SHORT);
  };

  return {
    codigo: Yup.string().required(() => showToastCodigo()),
    nombre: Yup.string().required(() => showToastNombre()),
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    paddingTop: 50,
  },
  error: {
    textAlign: "center",
    color: "#f00",
    marginTop: 20,
  },
});
