import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Main from "./src/screens/Main/";
import Navigation from "./src/navigation/BottonTab";
import store from "./src/redux/store/store";
import { Provider, useSelector } from "react-redux";
export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
