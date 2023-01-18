import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Button,
  StyleSheet,
  TextInput,
  ToastAndroid,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useFormik } from "formik";
import * as Yup from "yup";

/* Components */

export default function HomeScreen(props) {
  const { navigation } = props;

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [novedad, setNovedad] = useState("Nuevo");

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
        <TouchableOpacity
          title="modal"
          onPress={() => {
            toggleModal();
          }}
          style={styles.button}
        >
          <Text style={styles[novedad]}>
            <Icon
              name={
                novedad == "Nuevo"
                  ? "user-plus"
                  : novedad == "Editar"
                  ? "user-edit"
                  : novedad == "Eliminar"
                  ? "user-times"
                  : ""
              }
              style={{ fontSize: 20 }}
            ></Icon>
            {` ${novedad}`}
          </Text>
        </TouchableOpacity>

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

        <Modal
          isVisible={isModalVisible}
          onBackdropPress={() => setModalVisible(false)}
        >
          <View style={styles.modal}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>¿Que desea hacer?</Text>
              <View
                style={{ borderBottomColor: "grey", borderBottomWidth: 1 }}
              />
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setNovedad("Nuevo");
                  toggleModal();
                }}
              >
                <Text style={styles.modalTextButton}>Nuevo</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setNovedad("Editar");
                  toggleModal();
                }}
              >
                <Text style={styles.modalTextButton}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setNovedad("Eliminar");
                  toggleModal();
                }}
              >
                <Text style={styles.modalTextButton}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

function initialValues() {
  return {
    cedula: "",
    nombres: "",
    apellidos: "",
    celular: "",
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
    backgroundColor: "#f2f2f2",
  },
  textButton: {
    color: "#1b6dff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  error: {
    textAlign: "center",
    color: "#f00",
    marginTop: 20,
  },
  modal: {
    flex: 1,
    maxHeight: 310,
    padding: 30,
  },
  modalTitle: {
    textAlign: "center",
    justifyContent: "center",
    height: 40,
    fontWeight: "bold",
    fontSize: 20,
  },
  modalContainer: {
    color: "white",
    maxHeight: 250,
    padding: 30,
    backgroundColor: "white",
    borderRadius: 10,
  },
  modalButton: {
    justifyContent: "center",
    backgroundColor: "white",
    height: 50,
  },
  modalTextButton: {
    color: "black",
    textAlign: "center",
    //fontWeight: "bold",
    fontSize: 20,
  },
  Nuevo: {
    color: "green",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  Editar: {
    color: "#1b6dff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  Eliminar: {
    color: "red",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});
