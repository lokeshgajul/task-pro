import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { useSelector } from "react-redux";
import Create from "../screens/Create/index";
import BottomTab from "../navigation/BottonTab"; // Ensure the Home component is imported
import Search from "../screens/Search/index"; // Ensure the Search component is imported

const Stack = createStackNavigator();

const StackNavigator = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={BottomTab} // Ensure this is correctly imported
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="New Task"
        component={Create}
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
    </Stack.Navigator>
  );
};

export default StackNavigator;
