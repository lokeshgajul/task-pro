import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Switch,
  View,
  Dimensions,
  TouchableOpacity,
  Pressable,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from "react-native";
// import {
//   actions,
//   RichEditor,
//   RichToolbar,
// } from "react-native-pell-rich-editor";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import task from "../../../assets/task.jpeg";
import DateTimePicker from "react-native-modal-datetime-picker";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import axios from "axios";
const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

const handleHead = ({ tintColor }) => (
  <Text style={{ color: tintColor }}>H1</Text>
);

const Index = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);
  const [category, setCategory] = useState({ id: null, name: "" });
  const [showDate, setShowDate] = useState();
  const [showTime, setShowTime] = useState();
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const showDatePicker = () => {
    setIsDatePickerVisible(true);
  };
  const showTimePicker = () => {
    setIsTimePickerVisible(true);
  };

  const hideDatePicker = () => {
    setIsDatePickerVisible(false);
  };
  const hideTimePicker = () => {
    setIsTimePickerVisible(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    const selectedDateObject = new Date(date);

    const weekday = selectedDateObject.toLocaleDateString("en-us", {
      weekday: "long",
    });
    const day = selectedDateObject.toLocaleDateString("en-us", {
      day: "numeric",
    });
    const month = selectedDateObject.toLocaleDateString("en-us", {
      month: "short",
    });
    const year = selectedDateObject.toLocaleDateString("en-us", {
      year: "numeric",
    });

    // Construct the formatted date string
    const formattedDateString = `${weekday},  ${day} ${month}  ${year}`;

    console.warn("Formatted Date: ", formattedDateString);
    // setSelectedDate(formattedDateString);
    setShowDate(formattedDateString);
    hideDatePicker();
  };

  const handleTimeConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    const selectedDateObject = new Date(date);

    const formattedTimeString = selectedDateObject.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    console.warn("Formatted Time: ", formattedTimeString);
    // setSelectedDate(formattedDateString);
    setShowTime(formattedTimeString);
    hideTimePicker();
  };

  const SelectedDate = showDate && showDate;
  const SelectedTime = showTime && showTime;

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  const data = [
    { id: 1, name: "Marketing" },
    { id: 2, name: "Meeting" },
    { id: 3, name: "Dev" },
    { id: 4, name: "Mobile" },
    { id: 5, name: "UI Design" },
    { id: 6, name: "HTML" },
    { id: 7, name: "Graphic Design" },
    { id: 8, name: "Task 8" },
    { id: 9, name: "Task 9" },
  ];

  const GridItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.gridItem,
        { backgroundColor: category.id === item.id ? "#fef4e8" : "#ebf3fe" },
      ]}
      onPress={() => {
        setCategory(item);
        console.log("item.id", item.id, "name ", item.name);
      }}
    >
      <Text
        style={[
          styles.categoryTitle,
          {
            color: category.id === item.id ? "#f72989" : "#000",
            fontWeight: category.id === item.id ? "600" : "400",
          },
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  const createTask = async () => {
    setLoading(true);

    try {
      const response = await axios.post(
        "http://192.168.0.103:3020/api/tasks",
        {
          title,
          date: new Date(showDate).toLocaleDateString(),
          startingTime: showTime,
          description: desc,
          category: category.name,
        },
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Add any other headers you need here
            // For example, Authorization: `Bearer ${token}`
          },
        }
      );
      console.log("Task created:", response.data);
      setLoading(false); // Stop loading
      navigation.navigate("Home");
    } catch (error) {
      console.error("Error creating task:", error);
      // Handle error (e.g., show error message)
    }
  };

  useEffect(() => {
    console.log("state ", isEnabled);
  }, [isEnabled]);

  return (
    <>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 15,
        }}
        onPress={() => navigation.goBack()}
      >
        <AntDesign
          name="arrowleft"
          size={20}
          color={isDarkMode ? "#fff" : "#000"}
          marginRight={6}
        />
        <Text style={{ color: isDarkMode ? "#fff" : "#000" }}>New Task</Text>
      </Pressable>

      <ScrollView
        style={{
          paddingHorizontal: 15,
          flex: 1,
        }}
      >
        <View
          style={{
            padding: 5,
            borderBottomWidth: 1,
            borderBottomColor: "#757a89",
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              color: isDarkMode ? "#fff" : "#363738",
              fontWeight: "600",
              letterSpacing: 0.4,
              fontSize: 13,
            }}
          >
            Title
          </Text>
          <TextInput
            placeholder="Enter Title"
            value={title}
            onChangeText={(text) => {
              setTitle(text);
              console.log("title ", text);
            }}
            style={{
              color: isDarkMode ? "#c7c9ce" : "#1e1c1c",
              fontSize: 12,
              paddingTop: 5,
              fontWeight: "400",
            }}
            placeholderTextColor={isDarkMode ? "#dce0e8" : "#7c7e81"}
          />
        </View>
        <View
          style={{
            padding: 5,
            borderBottomWidth: 1,
            borderBottomColor: "#757a89",
            marginBottom: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{}}>
            <Text
              style={{
                color: isDarkMode ? "#fff" : "#363738",
                fontWeight: "600",
                letterSpacing: 0.4,
                fontSize: 13,
              }}
            >
              Date{" "}
            </Text>
            <TextInput
              placeholder="date"
              value={SelectedDate}
              style={{
                color: isDarkMode ? "#c7c9ce" : "#1e1c1c",
                fontSize: 12,
                paddingTop: 5,
                fontWeight: "400",
              }}
              placeholderTextColor={isDarkMode ? "#dce0e8" : "#7c7e81"}
            />
          </View>
          <Pressable
            onPress={showDatePicker}
            style={{ justifyContent: "center" }}
          >
            <Fontisto
              name="date"
              size={20}
              color={isDarkMode ? "white" : "black"}
            />
          </Pressable>
        </View>
        <View
          style={{
            padding: 5,
            borderBottomWidth: 1,
            borderBottomColor: "#757a89",
            marginBottom: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              style={{
                color: isDarkMode ? "#fff" : "#363738",
                fontWeight: "600",
                letterSpacing: 0.4,
                fontSize: 13,
              }}
            >
              Starting Time{" "}
            </Text>
            <TextInput
              placeholder="time"
              value={SelectedTime}
              style={{
                color: isDarkMode ? "#c7c9ce" : "#1e1c1c",
                fontSize: 12,
                paddingTop: 5,
                fontWeight: "400",
              }}
              placeholderTextColor={isDarkMode ? "#dce0e8" : "#7c7e81"}
            />
          </View>

          <Pressable
            onPress={showTimePicker}
            style={{ justifyContent: "center" }}
          >
            <Entypo
              name="back-in-time"
              size={20}
              color={isDarkMode ? "white" : "black"}
            />
          </Pressable>
        </View>
        <View
          style={{
            padding: 5,
            borderBottomWidth: 1,
            borderBottomColor: "#757a89",
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              color: isDarkMode ? "#fff" : "#363738",
              fontWeight: "600",
              letterSpacing: 0.4,
              fontSize: 13,
            }}
          >
            Description
          </Text>

          <View style={{ marginTop: -25 }}>
            <TextInput
              multiline={true}
              numberOfLines={5}
              placeholder="description..."
              value={desc}
              onChangeText={(text) => {
                setDesc(text);
                console.log("Desc", text);
              }}
              style={{
                color: isDarkMode ? "#c7c9ce" : "#1e1c1c",
                fontSize: 12,
                paddingTop: 5,
                fontWeight: "400",
              }}
              placeholderTextColor={isDarkMode ? "#dce0e8" : "#7c7e81"}
            />
          </View>
        </View>

        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 5,
            }}
          >
            <Text style={{ color: "#757a89", fontSize: 13, marginTop: -5 }}>
              Category{" "}
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#757a89",
                padding: 2,
                borderRadius: 20,
              }}
            >
              <Ionicons
                name="add"
                size={20}
                color={isDarkMode ? "white" : "black"}
              />
            </TouchableOpacity>
          </View>
          <FlatList
            data={data}
            renderItem={({ item }) => <GridItem item={item} />}
            keyExtractor={(item, index) => index.toString()}
            numColumns={3}
            contentContainerStyle={styles.grid}
          />
        </View>

        <View
          style={{
            marginTop: 15,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {isEnabled ? (
              <View style={{ backgroundColor: "#ff5467", borderRadius: 5 }}>
                <FontAwesome name="bell-o" size={16} color="#fff" padding={5} />
              </View>
            ) : (
              <FontAwesome name="bell-o" size={18} color="#ff5467" />
            )}
            <Text
              style={{
                marginLeft: 5,
                fontSize: 12,
                color: isEnabled ? "#ff5467" : "#7e7779",
                fontWeight: isEnabled ? "600" : "400",
              }}
            >
              Remind Me{" "}
            </Text>
          </View>
          <View>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#ff5467" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>

        <TouchableOpacity
          style={{
            justifyContent: "flex-end",
            alignItems: "flex-end",
            marginTop: 10,
            borderRadius: 10,
          }}
          onPress={createTask}
          disabled={loading} // Disable button while loading
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text
              style={{
                padding: 8,
                letterSpacing: 0.4,
                backgroundColor: "#ff5467",
                color: "#fff",
                fontSize: 11,
                borderRadius: 10,
                textTransform: "capitalize",
              }}
            >
              Create Task
            </Text>
          )}
        </TouchableOpacity>

        <DateTimePicker
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <DateTimePicker
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleTimeConfirm}
          onCancel={hideTimePicker}
        />
      </ScrollView>
    </>
  );
};

export default Index;

const styles = StyleSheet.create({
  grid: {
    width: screenWidth - 20,
  },
  gridItem: {
    margin: 10,
    padding: 7,
    height: screenWidth / 10, // Adjust for spacing
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#ebf3fe",
    borderRadius: 5,
  },
  categoryTitle: {
    color: "#000",
    fontSize: 12,
  },
});
