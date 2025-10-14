import { Text, TouchableHighlight, View } from "react-native";
import React from "react";

const TouchableHighlightComp = () => {
  return (
    <View>
      <TouchableHighlight
        style={{ padding: 10, borderRadius: 12, backgroundColor: "#23c870" }}
        underlayColor="#ff7700"
        onPress={() => alert("Hi!")}
        activeOpacity={0.5}
      >
        <Text>Press Here</Text>
      </TouchableHighlight>
    </View>
  );
};

export default TouchableHighlightComp;
