import { View, Text, Switch, StyleSheet } from "react-native";
import React, { useState } from "react";

const SwitchComp = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isEnabled ? "#d4edda" : "#f8d7da" },
      ]}
    >
      <Text style={styles.text}>
        {isEnabled ? "Switch is ON" : "Switch is OFF"}
      </Text>
      <Switch
        trackColor={{ false: "blue", true: "green" }}
        thumbColor={isEnabled ? "red" : "yellow"}
        ios_backgroundColor="black"
        value={isEnabled}
        onValueChange={toggleSwitch}
        style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 15,
  },
});

export default SwitchComp;
