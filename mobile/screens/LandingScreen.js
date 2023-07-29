import { Text, TouchableOpacity, View } from "react-native-ui-lib";
import { useNavigation } from "@react-navigation/native";
export const LandingScreen = () => {
  const navigation = useNavigation();

  const navigateToMapScreen = () => {
    navigation.navigate("MapScreen");
  };

  return (
    <View bg-violet flex center>
      <TouchableOpacity onPress={navigateToMapScreen}>
        <View>
          <Text montserratL h center black>
            Start Booking
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
