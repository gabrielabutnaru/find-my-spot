import MapView, { Marker } from "react-native-maps";
import {
  Colors,
  Image,
  Picker,
  Text,
  TextField,
  TouchableOpacity,
  View,
} from "react-native-ui-lib";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { ApolloClient, gql, InMemoryCache, useQuery } from "@apollo/client";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Modal } from "react-native";
import { KSpacer } from "../components/KSpacer";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { mapStyle } from "../components/map";
import { KBackButton } from "../components/KBackButton";

export const client = new ApolloClient({
  uri: "http://10.0.2.2:1337/graphql",
  cache: new InMemoryCache(),
});

const ALL_PARKINGS_QUERY = gql`
  query Parkings {
    parkings {
      data {
        id
        attributes {
          location_name
          adress
          latitude
          longitude
          lots
          price
          lots_occupied
        }
      }
    }
  }
`;

export const MapScreen = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);

  const openModal = (item) => {
    console.log(item);
    setSelectedMarker(item);
  };
  const closeModal = () => {
    setSelectedMarker(null);
  };
  const [text, onChangeText] = useState("Useless Text");
  const [number, onChangeNumber] = useState("");

  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["45%"], []);
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);
  const [parkingDataSheet, setParkingDataSheet] = useState(null);
  async function openSheet(item) {
    await setParkingDataSheet(item);
    await bottomSheetRef.current.present();
    //console.log(parkingDataSheet)
  }

  const { data, loading, error } = useQuery(ALL_PARKINGS_QUERY);
  if (error) console.log(error);
  if (loading) {
    return <Text>Fetching data...</Text>;
  }

  return (
    <>
      <BottomSheetModalProvider>
        <View flex center>
          <MapView
            style={{ width: "100%", height: "100%" }}
            initialRegion={{
              latitude: 45.7537,
              longitude: 21.2257,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            customMapStyle={mapStyle}
            rotateEnabled={false}
            toolbarEnabled={false}
          >
            {data.parkings.data.map((parking, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: parking.attributes.latitude,
                  longitude: parking.attributes.longitude,
                }}
                image={require("../assets/marker.png")}
                onPress={() => {
                  openModal(parking);
                  console.log(selectedMarker);
                }}
              />
            ))}
          </MapView>
          {selectedMarker && (
            <Modal
              transparent={true}
              visible={selectedMarker !== null}
              onRequestClose={closeModal}
            >
              <TouchableOpacity
                onPress={() => {
                  openSheet(selectedMarker).then((r) => closeModal);
                }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 30,
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <View
                  row
                  center
                  spread
                  padding-20
                  bg-white
                  width={350}
                  height={150}
                  style={{ borderRadius: 20 }}
                >
                  <View width={200}>
                    <Text l gilroyB>
                      {selectedMarker.attributes.location_name}
                    </Text>
                    <Text m gilroyL>
                      {selectedMarker.attributes.adress}
                    </Text>
                  </View>
                  <View center>
                    <View center row>
                      <Image source={require("../assets/usd-circle.png")} />
                      <KSpacer wid={4} />
                      <Text m gilroyB>
                        {selectedMarker.attributes.price} RON/hour
                      </Text>
                    </View>
                    <Text m gilroyL>
                      {parkingDataSheet.attributes.lots_occupied}/
                      {selectedMarker.attributes.lots}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </Modal>
          )}
        </View>
        {/*
        {parkingDataSheet !== null && selectedMarker === null ? (
          <BottomSheetModal
            ref={bottomSheetRef}
            index={0}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
          >
            <View center flex>
              <Text center gilroyB l>
                {parkingDataSheet.attributes.location_name}
              </Text>
              <Text gilroyL m>
                {parkingDataSheet.attributes.adress}
              </Text>
              <Text gilroyL m>
                {parkingDataSheet.attributes.price} RON/hour
              </Text>
              <Text gilroyL m>
                Lots: {parkingDataSheet.attributes.lots_occupied}/
                {parkingDataSheet.attributes.lots}
              </Text>
              <TextField
                fieldStyle={{
                  backgroundColor: "white",
                  borderWidth: 1,
                  borderColor: "black",
                  width: 160,
                  borderRadius: 10,
                }}
                placeholder={"Car numbers"}
                floatingPlaceholder
                onChangeText={onChangeText}
                maxLength={12}
              />
              <KSpacer />
              <View center row>
                <TextInput
                  style={{
                    backgroundColor: "white",
                    borderWidth: 1,
                    borderColor: "black",
                    width: 30,
                    borderRadius: 10,
                  }}
                  onChangeText={onChangeNumber}
                  value={number}
                  keyboardType="numeric"
                />
                <KSpacer />
                <Text gilroyL m>
                  hours
                </Text>
              </View>
              <KSpacer hei={40} />
              <TouchableOpacity>
                <View
                  bg-royalBlue
                  center
                  row
                  paddingH-12
                  paddingV-6
                  style={{ borderRadius: 10 }}
                >
                  <Text gilroyB l white>
                    Book
                  </Text>
                  <Icon
                    name={"arrow-forward-outline"}
                    size={28}
                    color="white"
                  />
                </View>
              </TouchableOpacity>
            </View>
          </BottomSheetModal>
        ) : (
          []
        )}*/}
        <KBackButton />
      </BottomSheetModalProvider>
    </>
  );
};
