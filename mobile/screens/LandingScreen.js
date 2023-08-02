import { Text, TouchableOpacity, View, Image } from "react-native-ui-lib";
import { useNavigation } from "@react-navigation/native";
import { KSpacer } from "../components/KSpacer";
export const LandingScreen = () => {
  const navigation = useNavigation();

  const navigateToMapScreen = () => {
    navigation.navigate("MapScreen");
  };

  return (
    <View bg-violet flex center style bg-black>
      <Image
        source={require("../assets/logo.png")}
        style={{ width: 370, height: 200, borderRadius: 50 }}
      />

      <KSpacer hei={60} />

      <Text
        montserratL
        h
        gilroyL
        center
        style={{
          fontSize: 35,
          color: "#715ae3",
          width: 350,
        }}
      >
        Rezervă locuri de parcare in timp real fără stres și fără bătăi de cap!
      </Text>

      {/*<Image source={require('../assets/parking1.avif')} style={{width: 370, height: 300, marginTop: 40 }} />*/}

      <KSpacer hei={60} />
      <TouchableOpacity
        style={{ backgroundColor: "#715ae3", borderRadius: 50 }}
        onPress={navigateToMapScreen}
      >
        <View>
          <Text
            h1
            gilroyB
            center
            white
            style={{
              fontSize: 29,
              width: 350,
            }}
          >
            Rezervă acum!
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
