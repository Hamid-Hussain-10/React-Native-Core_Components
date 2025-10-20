import { View, ActivityIndicator } from "react-native";
import React from "react";

const ActivityIndicatorComp = () => {
  return (
    <View>
      <ActivityIndicator size="large" color="#f00" animating />
    </View>
  );
};

export default ActivityIndicatorComp;
