import { View } from "react-native";
// import ViewComp from "../components/View";
// import TextComp from "../components/Text";
// import InputComp from "../components/Input";
// import TouchableOpacityComp from "../components/TouchableOpacity";
// import ScrollViewComp from "../components/ScrollView";
// import FlatListComp from "../components/FlatList";
import SectionListComp from "../components/SectionList";
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
      {/* <TextComp /> */}
      {/* <InputComp/> */}
      {/* <TouchableOpacityComp/> */}
      {/* <TouchableHighlightComp/> */}
      {/* <ScrollViewComp/> */}
      {/* <FlatListComp/> */}
      <SectionListComp/>
    </View>
  );
}
