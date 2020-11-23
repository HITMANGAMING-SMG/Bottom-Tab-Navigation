import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import InstaScreen from "./screens/InstaScreen";
import FBScreen from "./screens/FBScreen";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

export default function App() {
  return <AppContainer />;
}

const TabNavigator = createBottomTabNavigator({
  Instargram: {
    screen: InstaScreen,
  },
  Facebook: {
    screen: FBScreen,
  },
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
