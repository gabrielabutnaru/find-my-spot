import { Text, TouchableOpacity, View, Image } from "react-native-ui-lib";
import { useNavigation } from "@react-navigation/native";
export const LandingScreen = () => {
  const navigation = useNavigation();

  const navigateToMapScreen = () => {
    navigation.navigate("MapScreen");
  };

  return (
    <View bg-violet flex center style={{ backgroundColor: 'black'}}>
      <Image source={require('../assets/logo.png')} style={{width: 370, height: 200, borderRadius: 50 }} />

        <Text black >
            Line 1{'\n'}
            Line 1{'\n'}
            Line 1{'\n'}
            Line 1{'\n'}
            Line 1{'\n'}
            Line 1{'\n'}

        </Text>

        <Text montserratL h center style={{fontfamily: "Gill Sans" ,fontSize: 35, color: '#715ae3', width:350, length: 80}}>
            Rezervă locuri de parcare in timp real fără stres și fără bătăi de cap!
        </Text>

        {/*<Image source={require('../assets/parking1.avif')} style={{width: 370, height: 300, marginTop: 40 }} />*/}

        <Text black >
            Line 1{'\n'}
            Line 1{'\n'}
            Line 1{'\n'}
            Line 1{'\n'}
        </Text>
      <TouchableOpacity style={{backgroundColor:'#715ae3', borderRadius:50}} onPress={navigateToMapScreen}>
        <View>
            <Text h1 center style={{fontfamily: "Gill Sans" ,fontSize: 29, color: 'white', width:350, length: 80}}>
                Rezervă acum!
            </Text>

        </View>
      </TouchableOpacity>


    </View>
  );
};
