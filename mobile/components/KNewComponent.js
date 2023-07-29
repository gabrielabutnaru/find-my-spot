import { TouchableOpacity, Text } from "react-native-ui-lib";

export const KNewComponent = () => {
  return (
    <TouchableOpacity
      bg-white
      width={300}
      height={100}
      style={{ position: "absolute", bottom: 30, left: 30 }}
    >
      <Text> Hello World </Text>
    </TouchableOpacity>
  );
};
