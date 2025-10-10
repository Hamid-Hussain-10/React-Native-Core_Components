import { View } from "react-native";
// import ViewComp from "../components/View";
import TextComp from "../components/Text";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <ViewComp /> */}
      <TextComp />
    </View>
  );
}
