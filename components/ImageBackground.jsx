import { View, Text, ImageBackground } from "react-native";
import React from "react";

const ImageBackgroundComp = () => {
  return (
    <View>
      <ImageBackground
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={{ width: 200, height: 200 }}
      >
        <Text style={{ color: "#fff" }}>Overlay Text</Text>
      </ImageBackground>
    </View>
  );
};

export default ImageBackgroundComp;
