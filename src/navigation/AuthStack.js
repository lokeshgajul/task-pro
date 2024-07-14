import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "../screens/Signup";
import Login from "../screens/Login/index";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

const AuthStack = () => {
  const AuthStack = createStackNavigator();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignUp"
        component={SignUp} // Ensure this is correctly imported
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          headerBackgroundContainerStyle: {
            backgroundColor: isDarkMode ? "#28292b" : "#fff",
          },
          headerLeftContainerStyle: {
            width: 25, // Adjust the value to increase or decrease the spacing
          },
          headerTitleStyle: {
            paddingLeft: 10, // Adjust the value to increase or decrease the spacing
            fontSize: 15,
            color: isDarkMode ? "#c5c6c9" : "#000",
          },
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
