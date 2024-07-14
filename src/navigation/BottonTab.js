import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";
import { View } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "../screens/Home/index";
import Search from "../screens/Search/index";
import BookMark from "../screens/BookMark/index";
import SignUp from "../screens/Signup";
import Login from "../screens/Login";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

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
        name="BottomTab"
        component={Home}
        options={{
          tabBarLabel: "Home",
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
      <Tab.Screen
        name="BookMark"
        component={BookMark}
        options={{
          tabBarLabel: "BookMark",
          tabBarIcon: ({ focused }) => (
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
        component={Login}
        options={{
          tabBarLabel: "Notifications",
          tabBarIcon: ({ focused }) => (
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

export default BottomTab;
