import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const TouchableOpacityComp = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => alert("Pressed!")}
        activeOpacity={0.8}
        style={styles.button}
        // disabled
      >
        <Text style={styles.buttonText}>Click Me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  button: {
    backgroundColor: "tomato",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
});

export default TouchableOpacityComp;
