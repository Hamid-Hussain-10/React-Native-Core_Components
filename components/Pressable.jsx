import { View, Pressable, Text } from "react-native";
import React from "react";

const PressableComp = () => {
  return (
    <View>
      <Pressable
        style={{ padding: 10, backgroundColor: "orange", borderRadius: 10 }}
        onPress={() => alert("Pressed")}
        onLongPress={() => alert("Long Press")}
        // disabled
      >
        <Text>Pressable Button</Text>
      </Pressable>
    </View>
  );
};

export default PressableComp;
