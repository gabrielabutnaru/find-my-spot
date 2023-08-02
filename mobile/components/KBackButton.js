import { TouchableOpacity, View } from "react-native-ui-lib";
import Icon from "react-native-vector-icons/Ionicons";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export const KBackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{ position: "absolute", top: 30, left: 30 }}
    >
      <View center bg-white width={40} height={40} style={{ borderRadius: 32 }}>
        <Icon name="chevron-back-outline" size={28} color="black" />
      </View>
    </TouchableOpacity>
  );
};
