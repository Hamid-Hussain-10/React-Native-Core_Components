import { View, Text, FlatList } from "react-native";
import React from "react";

const data = [
  { id: "1", name: "Apple" },
  { id: "2", name: "Banana" },
  { id: "3", name: "orange" },
  { id: "4", name: "PineApple" },
  { id: "5", name: "Watermelon" },
];

const FlatListComp = () => {
  return (
    <View>
      <FlatList
        data={data}
        // horizontal   // Scrolls horizontally
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={{ margin: 10 }}>{item.name}</Text>
        )}
        // numColumns={3}
        ListHeaderComponent={() => (
          <Text style={{ fontWeight: "bold", margin: 10 }}>Fruits List:</Text>
        )}
      />
    </View>
  );
};

export default FlatListComp;
