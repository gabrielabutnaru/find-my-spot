import { configTheme } from "./theme";
import { NavigationContainer } from "@react-navigation/native";
import { LandingScreen } from "./screens/LandingScreen";
import { client, MapScreen } from "./screens/MapScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { ApolloProvider } from "@apollo/client";

configTheme();

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style={"light"} />
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={"LandingScreen"} component={LandingScreen} />
            <Stack.Screen name={"MapScreen"} component={MapScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    </GestureHandlerRootView>
  );
}
