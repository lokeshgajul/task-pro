import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import profile from "../../../assets/profile.jpeg";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/slices/ThemeSlice";
import { Entypo } from "@expo/vector-icons";
const Index = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const dispatch = useDispatch();

  const handleToggleSwitch = () => {
    dispatch(toggleTheme());
  };

  console.log("theme header", isDarkMode);
  return (
    <View
      style={{
        paddingTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingBottom: 5,
        backgroundColor: isDarkMode ? "#28292b" : "#fff",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: 30, height: 30 }}>
          <Image source={profile} style={{ width: "100%", height: "100%" }} />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "flex-start",
            marginLeft: 7,
          }}
        >
          <Text
            style={{
              fontSize: 11.5,
              fontWeight: "600",
              lineHeight: 15,
              color: isDarkMode ? "#fff" : "#000",
            }}
          >
            Hi, Jordan{" "}
          </Text>
          <Text
            style={{
              fontSize: 10.5,
              fontWeight: "600",
              lineHeight: 15,
              color: isDarkMode ? "#fff" : "#000",
            }}
          >
            Good afternoon{" "}
          </Text>
        </View>
      </View>

      <Pressable onPress={() => handleToggleSwitch()}>
        {isDarkMode ? (
          <Entypo name="light-up" size={24} color="#fff" />
        ) : (
          <MaterialIcons name="dark-mode" size={28} color="black" top={-5} />
        )}
      </Pressable>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
