import { View, Text, SectionList } from "react-native";
import React from "react";

const sections = [
  { title: "A", data: ["Apple", "Avocado"] },
  { title: "B", data: ["Banana", "Berry"] },
];

const SectionListComp = () => {
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        Section List Example
      </Text>

      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <Text style={{ marginLeft: 10, fontSize: 16 }}>{item}</Text>
        )}
        renderSectionHeader={({ section }) => (
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              backgroundColor: "#f0f0f0",
              paddingVertical: 4,
              paddingHorizontal: 8,
              marginTop: 10,
            }}
          >
            {section.title}
          </Text>
        )}
      />
    </View>
  );
};

export default SectionListComp;
