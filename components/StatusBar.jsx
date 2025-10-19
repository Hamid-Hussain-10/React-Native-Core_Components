import { View, StatusBar } from "react-native";
import React from "react";

const StatusBarComp = () => {
  return (
    <View>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#f5d858"
        //   hidden
      />
    </View>
  );
};

export default StatusBarComp;
