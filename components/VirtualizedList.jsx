import React from "react";
import { View, Text, VirtualizedList, StyleSheet } from "react-native";

const VirtualizedListComp = () => {
  const getItemCount = (data) => data.length;
  const getItem = (data, index) => data[index];

  return (
    <View style={styles.container}>
      <VirtualizedList
        data={[...Array(50).keys()]}
        initialNumToRender={15}
        renderItem={({ item }) => <Text style={styles.item}>Item {item}</Text>}
        keyExtractor={(item) => item.toString()}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    fontSize: 16,
    paddingVertical: 8,
  },
});

export default VirtualizedListComp;
