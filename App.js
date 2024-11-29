import "react-native-gesture-handler";
import React, { useState } from "react";
import { StyleSheet, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import TabNavigator from "./Components/navigation/TabNavigator";
import MainStackNavigator from "./Components/navigation/MainStackNavigator";

export default function App() {
  const [isUserLogged, setLogged] = useState(true);
  return (
    <NavigationContainer>
      {isUserLogged ? (
        <TabNavigator setLogged={setLogged} />
      ) : (
        <MainStackNavigator setLogged={setLogged} />
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
