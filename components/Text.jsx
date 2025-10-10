import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";

const TextComp = () => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
        numberOfLines={2} // limit text to 2 lines
        ellipsizeMode="tail"
        onPress={() => Alert.alert("Text Pressed")} // pass a function, not a direct call
        selectable={true} // allow selecting text
        selectionColor="yellow" // highlight color when selecting
      >
        This text is long enough to show ellipsizeMode effect. This text is long
        enough to show ellipsizeMode effect. This text is long enough to show
        ellipsizeMode effect.
      </Text>
    </View>
  );
};

export default TextComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  text: {
    fontSize: 18,
    color: "#333",
    marginBottom: 10,
  },
});
