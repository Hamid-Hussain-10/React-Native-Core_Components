import React, { useState } from "react";
import { View, Text, Modal, Button } from "react-native";

const ModalComp = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Open Modal" onPress={() => setShowModal(true)} />

      <Modal
        visible={showModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowModal(false)} // For Android back button
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#ceaf82",
              padding: 20,
              borderRadius: 16,
              width: "80%",
              alignItems: "center",
            }}
          >
            <Text style={{ marginBottom: 10 }}>Modal Content</Text>
            <Button title="Close" onPress={() => setShowModal(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalComp;
