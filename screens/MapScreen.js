import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("screen");

const MapScreen = ({ item }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <MapView
        style={styles.mapStyle}
        region={{
          latitude: 49.223,
          longitude: 18.74,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        mapType="standard"
        onMapReady={() => console.log("Карта готова")}
        onRegionChange={() => console.log("Регион изменился")}>
        <Marker
          title="Žilina"
          coordinate={{
            latitude: 49.223,
            longitude: 18.74,
          }}
          description="Žilina staré mesto"
        />
      </MapView>
    </View>
  );
};
const styles = StyleSheet.create({
  mapStyle: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
});
export default MapScreen;
