import { View, KeyboardAvoidingView, TextInput } from "react-native";
import React from "react";

const KeyboardAvoidingViewComp = () => {
  return (
    <View>
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <TextInput placeholder="Type something..." />
      </KeyboardAvoidingView>
    </View>
  );
};

export default KeyboardAvoidingViewComp;
