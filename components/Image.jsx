import { View, Image, Alert } from "react-native";
import React from "react";

const ImageComp = () => {
  return (
    <View>
      <Image
        source={require("../assets/images/icon.png")}
        style={{
          width: 100,
          height: 100,
          borderRadius: 20,
          borderColor: "#11a87d",
          borderWidth: 1,
        }}
        resizeMode="contain"
        onLoad={() => console.log("Image loaded successfully")}
        onError={(error) => Alert.alert("Error", "Failed to load image")}
      />
    </View>
  );
};

export default ImageComp;
