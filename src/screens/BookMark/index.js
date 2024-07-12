import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, Menu, Divider, PaperProvider } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Index = () => {
  const [showOption, setShowOption] = useState();

  const openMenu = () => setShowOption(true);
  const closeMenu = () => setShowOption(false);
  return (
    <PaperProvider>
      {/* <View
        style={{
          paddingTop: 50,
          flexDirection: "row",
          justifyContent: "center",
        }}
      > */}
      <Menu
        visible={showOption}
        onDismiss={closeMenu}
        anchor={
          <Button onPress={openMenu}>
            {" "}
            <MaterialCommunityIcons
              name="dots-vertical"
              size={18}
              color="black"
            />
          </Button>
        }
      >
        <Menu.Item onPress={() => {}} title="Item 1" />
        <Menu.Item onPress={() => {}} title="Item 2" />
        <Divider />
        <Menu.Item onPress={() => {}} title="Item 3" />
      </Menu>
      {/* </View> */}
    </PaperProvider>
  );
};

export default Index;

const styles = StyleSheet.create({});
