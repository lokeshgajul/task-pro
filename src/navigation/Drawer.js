import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Home from "../screens/Home";
import Create from "../screens/Create";
import Search from "../screens/Search";
import profile from "../../assets/profile.jpeg";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// const CustomDrawerContent = (props) => (
//   <DrawerContentScrollView {...props}>
//     <DrawerItemList {...props} />
//   </DrawerContentScrollView>
// );

const HomeStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#fef4e8",
      },
    }}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: true,
        headerTitle: "",

        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Ionicons
              name="menu-outline"
              size={24}
              color="black"
              marginLeft={15}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <View style={styles.headerContainer}>
            <Ionicons name="person-circle" size={28} color="black" />
          </View>
        ),
      }}
    />
    <Stack.Screen
      name="Create"
      component={Create}
      options={{
        headerShown: true,
        headerTransparent: false,
        headerTitle: "",
        headerRight: () => (
          <View style={styles.headerContainer}>
            <View style={styles.profileContainer}>
              <Image source={profile} style={styles.profileImage} />
            </View>
          </View>
        ),
        // headerLeft: null, // No drawer icon on this screen
      }}
    />
  </Stack.Navigator>
);

const App = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default App;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  profileContainer: {
    backgroundColor: "#ff5467",
    width: 45,
    height: 100,
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginRight: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 2,
  },
});
