import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Create from "../screens/Create";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import Header from "../screens/Header/index";

const BottonTab = () => {
  const Tab = createBottomTabNavigator();
  const HomeStack = createStackNavigator();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const tabBarOptions = {
    activeTintColor: isDarkMode ? "#fff" : "#000",
    inactiveTintColor: isDarkMode ? "#888" : "#888",
    style: {
      backgroundColor: isDarkMode ? "#000" : "#fff",
    },
  };

  const HomeStackScreen = () => (
    <HomeStack.Navigator screenOptions={tabBarOptions}>
      <HomeStack.Screen
        name="MainHome"
        component={Home}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="New Task"
        component={Create}
        options={{
          headerLeftContainerStyle: {
            width: 25, // Adjust the value to increase or decrease the spacing
          },
          headerTitleStyle: {
            paddingLeft: 10, // Adjust the value to increase or decrease the spacing
            fontSize: 15,
          },
        }}
      />
    </HomeStack.Navigator>
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: isDarkMode ? "#28292b" : "#fff",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <Entypo
                  name="home"
                  size={20}
                  color={isDarkMode ? "white" : "black"}
                />
              ) : (
                <AntDesign
                  name="home"
                  size={20}
                  color={isDarkMode ? "#f3f3f3" : "black"}
                />
              )}
            </View>
          ),
          tabBarLabelStyle: {
            color: isDarkMode ? "white" : "black",
          },
        }}
      />
      {/* <Tab.Screen
        name="Create"
        component={Create}
        options={{
          tabBarLabel: "Create",
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                backgroundColor: "#a76fff",
                borderRadius: 12, // Adjust the value as needed
                padding: 3,
              }}
            >
              <Ionicons
                name="add"
                size={24}
                color={focused ? "#000" : "#fff"}
              />
            </View>
          ),

          tabBarLabelStyle: {
            color: "black",
          },
        }}
      /> */}
      <Tab.Screen
        name="BookMark"
        component={Search}
        options={{
          tabBarLabel: "BookMark",
          tabBarIcon: ({ color, size, focused }) => (
            <View>
              {focused ? (
                <FontAwesome
                  name="bookmark"
                  size={20}
                  color={isDarkMode ? "white" : "black"}
                />
              ) : (
                <Feather
                  name="bookmark"
                  size={20}
                  color={isDarkMode ? "#f3f3f3" : "black"}
                />
              )}
            </View>
          ),
          tabBarLabelStyle: {
            color: isDarkMode ? "white" : "black",
          },
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={Search}
        options={{
          tabBarLabel: "Notifications",
          tabBarIcon: ({ color, size, focused }) => (
            <View>
              {focused ? (
                <Ionicons
                  name="notifications"
                  size={20}
                  color={isDarkMode ? "white" : "black"}
                />
              ) : (
                <Ionicons
                  name="notifications-outline"
                  size={20}
                  color={isDarkMode ? "#f3f3f3" : "black"}
                />
              )}
            </View>
          ),
          tabBarLabelStyle: {
            color: isDarkMode ? "white" : "black",
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottonTab;

const styles = StyleSheet.create({});
