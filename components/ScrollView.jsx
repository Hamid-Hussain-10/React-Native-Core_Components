import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";

const ScrollViewComp = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ScrollView Example</Text>

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        // horizontal
        // showsHorizontalScrollIndicator
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {[...Array(10)].map((_, i) => (
          <View key={i} style={styles.item}>
            <Text style={styles.itemText}>Item {i + 1}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ScrollViewComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    margin: 10,
  },
  scrollContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  item: {
    padding: 20,
    backgroundColor: "#e0e0e0",
    marginRight: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 3,
  },
  itemText: {
    fontSize: 16,
  },
});
