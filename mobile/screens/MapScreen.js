import MapView, { Marker } from "react-native-maps";
import { Image, Text, TouchableOpacity, View } from "react-native-ui-lib";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { ApolloClient, gql, InMemoryCache, useQuery } from "@apollo/client";
import React, { useState } from "react";

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
        }
      }
    }
  }
`;
export const MapScreen = () => {
  const navigation = useNavigation();
  const { data, loading, error } = useQuery(ALL_PARKINGS_QUERY);

  if (error) console.log(error);

  if (loading) {
    return <Text>Fetching data...</Text>;
  }
  const mapStyle = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#212121",
        },
      ],
    },
    {
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#212121",
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "administrative.country",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#bdbdbd",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#181818",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1b1b1b",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#2c2c2c",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#8a8a8a",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#373737",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#3c3c3c",
        },
      ],
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry",
      stylers: [
        {
          color: "#4e4e4e",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#3d3d3d",
        },
      ],
    },
  ];

  return (
    <>
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
        >
          {data.parkings.data.map((parking, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: parking.attributes.latitude,
                longitude: parking.attributes.longitude,
              }}
              title={parking.attributes.location_name}
              description={parking.attributes.adress}
              image={require("../assets/marker.png")}
            />
          ))}
        </MapView>
      </View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ position: "absolute", top: 30, left: 30 }}
      >
        <View
          center
          bg-white
          width={40}
          height={40}
          style={{ borderRadius: 32 }}
        >
          <Icon name="chevron-back-outline" size={28} color="black" />
        </View>
      </TouchableOpacity>
    </>
  );
};
