import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, StyleSheet, SafeAreaView } from "react-native";
import { useSelector, Provider } from "react-redux";
import StackNavigator from "./Stack";
import store from "../redux/store/store";
import Header from "../screens/Header/index";
import AuthStack from "./AuthStack";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/config";

const Index = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const userUid = useSelector((state) => state.auth.userUid);

  const handleUserChange = (email) => {
    setLoggedInUser(true); // Update state with the logged-in user's email
    console.log("email ", email);
  };
  const [user, setUser] = useState();

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

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // setLoggedInUser(true);
  //     setUser(user);
  //     console.log("state ", user.uid);
  //   } else {
  //     // User is signed out
  //     setUser(undefined);
  //     console.log("data not available ", user);
  //   }
  // });
  // return CheckAuthLoggedIn();
  // }, []);

  return (
    <NavigationContainer theme={MyTheme}>
      <SafeAreaView style={styles.container}>
        {userUid ? (
          <>
            <StatusBar
              backgroundColor={isDarkMode ? "#28292b" : "#fff"}
              barStyle={isDarkMode ? "light-content" : "dark-content"}
            />
            <Header />
            <StackNavigator />
          </>
        ) : (
          // <SignUp onChangeLoggedInUser={handleUserChange} />
          <>
            <StatusBar backgroundColor="#28292b" barStyle={"dark-content"} />
            <AuthStack />
          </>
        )}
        {/* <StackNavigator /> */}
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
