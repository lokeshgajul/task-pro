import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Main from "./src/screens/Main/";
import Navigation from "./src/navigation/index";
import store from "./src/redux/store/store";
import { Provider, useSelector } from "react-redux";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SignUp from "./src/screens/Signup/index";
import { useState } from "react";
export default function App() {
  const [loggedInUser, setLoggedInUser] = useState(false);

  const handleUserChange = (email) => {
    setLoggedInUser(true); // Update state with the logged-in user's email
    console.log("email ", email);
  };

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        {/* {loggedInUser ? ( */}
        <Navigation />
        {/* // ) : (
        //   <SignUp onChangeLoggedInUser={handleUserChange} />
        // )} */}
      </GestureHandlerRootView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
