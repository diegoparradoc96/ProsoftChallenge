import React, { useState, useEffect } from "react";

/* imports */
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function CON851(props) {
  const { showCON851, modalCON851, textCON851 } = props;
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setModalVisible(showCON851);
  }, [showCON851]);

  return (
    <Modal
      isVisible={modalVisible}
      onBackdropPress={() => modalCON851(modalVisible)}
    >
      <View style={styles.modal}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{textCON851}</Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    maxHeight: 180,
    padding: 30,
  },
  modalContainer: {
    color: "white",
    maxHeight: 250,
    padding: 30,
    backgroundColor: "white",
    borderRadius: 10,
  },
  modalTitle: {
    textAlign: "center",
    justifyContent: "center",
    maxHeight: 80,
    fontWeight: "bold",
    fontSize: 16,
  },
});
