import { View, Text } from "react-native";
import { useState } from "react";

export default function App() {
  const [layout, setLayout] = useState(null);

  return (
    <View
      style={{ padding: 20, backgroundColor: "#f56d0c", borderRadius: 16 }}
      // makes it accessible for screen readers
      accessible={true}
      // detects layout changes
      onLayout={(e) => setLayout(e.nativeEvent.layout)}
    >
      <Text>Hello from View!</Text>

      {layout && (
        <Text>
          Layout: width={layout.width}, height={layout.height}
        </Text>
      )}
    </View>
  );
}
