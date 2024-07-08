import { StatusBar, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import Navigation from "./BottonTab";
import { useSelector } from "react-redux";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import Header from "../screens/Header/index";

const Index = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const MyTheme = {
    dark: isDarkMode,
    colors: {
      primary: "rgb(255, 45, 85)",
      background: isDarkMode ? "#28292b" : "#fff",
      card: "rgb(255, 255, 255)",
      text: isDarkMode ? "#fff" : "#000",
      border: "rgb(199, 199, 204)",
      notification: "rgb(255, 69, 58)",
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor={isDarkMode ? "#28292b" : "#fff"}
          barStyle={isDarkMode ? "light-content" : "dark-content"}
        />
        <Header />
        <Navigation />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
