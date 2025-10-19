import { Text, SafeAreaView } from "react-native";
import React from "react";

const SafeAreaViewComp = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Text>Safe Area Content</Text>
    </SafeAreaView>
  );
};

export default SafeAreaViewComp;
