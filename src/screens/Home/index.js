import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  StatusBar,
  ScrollView,
  Pressable,
  ProgressBarAndroid,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../Header/index";
const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const Index = ({ navigation }) => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  return (
    <View style={{ flex: 1, paddingHorizontal: 20 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingTop: 15 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "500",
              letterSpacing: 0.4,
              color: isDarkMode ? "#c5c6c9" : "#000",
            }}
          >
            Manage Your
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "500",
              letterSpacing: 0.4,
              color: isDarkMode ? "#c5c6c9" : "#000",
            }}
          >
            Daily Tasks
          </Text>
        </View>

        <View
          style={{
            width: screenWidth / 2.5,
            paddingHorizontal: 15,
            paddingTop: 20,
            paddingBottom: 10,
            backgroundColor: "#c3ebef",
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            marginTop: 10,
            elevation: 4,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingBottom: 10,
            }}
          >
            <Text
              style={{
                padding: 4,
                backgroundColor: "#fff",
                fontSize: 11,
                borderRadius: 15,
                width: 45,
                textAlign: "center",
              }}
            >
              HIGH{" "}
            </Text>
            <Feather name="arrow-up-right" size={20} color="black" />
          </View>
          <View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "500",
                letterSpacing: 0.4,
              }}
            >
              Google Project
            </Text>
          </View>
          <View>
            <Text style={{ letterSpacing: 0.4, fontSize: 11, paddingTop: 5 }}>
              Design User Interface Using Prototype{" "}
            </Text>
          </View>

          <View style={{}}>
            <Text
              style={{
                letterSpacing: 0.4,
                fontSize: 10,
                textAlign: "right",
                fontWeight: "500",
              }}
            >
              60%
            </Text>
            <ProgressBarAndroid
              styleAttr="Horizontal"
              indeterminate={false}
              progress={0.65}
              color="#2d2e31"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              paddingTop: 5,
            }}
          >
            <Ionicons
              name="time-outline"
              size={16}
              color="black"
              marginRight={5}
            />
            <Text style={{ letterSpacing: 0.4, fontSize: 11 }}>
              7 Days ago{" "}
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 15 }}>
          <Text style={{ color: isDarkMode ? "#c5c6c9" : "#000" }}>
            Your Task{" "}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                marginRight: 15,
                padding: 9,
                backgroundColor: isDarkMode ? "#393b3d" : "#f3f3f3",
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  textAlign: "center",
                  fontWeight: "600",
                  color: isDarkMode ? "#8f9194" : "#373737",
                }}
              >
                To Do (2){" "}
              </Text>
            </View>
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                marginRight: 15,
                padding: 9,
                backgroundColor: isDarkMode ? "#393b3d" : "#f3f3f3",
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 11,
                  textAlign: "center",
                  color: isDarkMode ? "#8f9194" : "#373737",
                }}
              >
                In Progress (5)
              </Text>
            </View>
          </View>
        </View>

        <View style={{ marginBottom: 10 }}>
          {[1, 2, 3].map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  backgroundColor: isDarkMode ? "#333637" : "#E4F0FE",
                  // backgroundColor: "#DDD2FC",
                  paddingTop: 10,
                  paddingHorizontal: 10,
                  paddingBottom: 15,
                  height: 90,
                  marginTop: 15,
                  borderRadius: 15,
                  elevation: 1.5,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      paddingTop: 5,
                      justifyContent: "space-between",
                    }}
                  >
                    <Ionicons
                      name="time-outline"
                      size={16}
                      color={isDarkMode ? "#9ea0a3" : "black"}
                      marginRight={5}
                    />
                    <Text
                      style={{
                        letterSpacing: 0.4,
                        fontSize: 11,
                        color: isDarkMode ? "#9a9c9f" : "#000",
                      }}
                    >
                      7 Days ago{" "}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        padding: 4,
                        backgroundColor: isDarkMode ? "#4e4f4f" : "#fff",
                        fontSize: 11,
                        borderRadius: 15,
                        width: 45,
                        textAlign: "center",
                        color: isDarkMode ? "#9ea0a3" : "#000",
                      }}
                    >
                      HIGH{" "}
                    </Text>
                  </View>
                </View>

                <View style={{ paddingTop: 10 }}>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: "500",
                      textAlign: "left",
                      color: isDarkMode ? "#9ea0a3" : "#5e6465",
                    }}
                  >
                    Business consultation with our partners{" "}
                  </Text>
                </View>

                <TouchableOpacity style={{ alignItems: "flex-end" }}>
                  <MaterialCommunityIcons
                    name="dots-vertical"
                    size={18}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>

      <Pressable
        style={{ position: "absolute", bottom: 40, right: 30 }}
        onPress={() => navigation.navigate("New Task")}
      >
        <View
          style={{
            backgroundColor: isDarkMode ? "#4c4e4e" : "#DDD2FC",
            padding: 15,
            borderRadius: 25,
          }}
        >
          <FontAwesome6
            name="add"
            size={22}
            color={isDarkMode ? "#fff" : "black"}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
