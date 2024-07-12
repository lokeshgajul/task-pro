import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, StyleSheet, SafeAreaView } from "react-native";
import { useSelector, Provider } from "react-redux";
import StackNavigator from "./Stack";
import store from "../redux/store/store";
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
        <StackNavigator />
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
