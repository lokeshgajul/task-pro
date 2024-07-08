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
} from "react-native";
// import {
//   actions,
//   RichEditor,
//   RichToolbar,
// } from "react-native-pell-rich-editor";
import { FontAwesome } from "@expo/vector-icons";
import task from "../../../assets/task.jpeg";
import DateTimePicker from "react-native-modal-datetime-picker";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Header from "../Header/index";
const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

const handleHead = ({ tintColor }) => (
  <Text style={{ color: tintColor }}>H1</Text>
);

const Index = ({ navigation }) => {
  const richText = useRef();
  const todayDate = new Date();
  const [isEnabled, setIsEnabled] = useState(false);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);
  const [category, setCategory] = useState(false);
  const [showDate, setShowDate] = useState();
  const [showTime, setShowTime] = useState();

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
        { backgroundColor: category === item.id ? "#fef4e8" : "#ebf3fe" },
      ]}
      onPress={() => {
        setCategory(item.id);
        console.log("item.id", item.id);
      }}
    >
      <Text
        style={[
          styles.categoryTitle,
          {
            color: category === item.id ? "#f72989" : "#000",
            fontWeight: category === item.id ? "600" : "400",
          },
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  useEffect(() => {
    console.log("state ", isEnabled);
  }, [isEnabled]);

  return (
    <>
      {/* <View
        style={{
          alignItems: "center",
          backgroundColor: "#fef4e8",
        }}
      >
        <View
          style={{
            height: screenHeight / 4,
            width: screenWidth - 50,
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: "100%",
              height: "100%",
              alignItems: "center",
            }}
            source={task}
          />
        </View>
      </View> */}

      <ScrollView
        style={{
          paddingHorizontal: 15,
          // backgroundColor: "#fff",
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
          <Text style={{ color: "#757a89", fontSize: 12 }}>Title</Text>
          <TextInput
            placeholder="First task"
            style={{
              color: "#544",
              fontSize: 15,
              paddingTop: 5,
            }}
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
                color: "#757a89",
                fontSize: 12,
              }}
            >
              Date{" "}
            </Text>
            <TextInput
              placeholder="date"
              value={SelectedDate}
              style={{
                color: "#544",
                fontSize: 13,
              }}
            />
          </View>
          <Pressable
            onPress={showDatePicker}
            style={{ justifyContent: "center" }}
          >
            <Fontisto name="date" size={20} color="black" />
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
            <Text style={{ color: "#757a89", fontSize: 12 }}>
              Starting Time{" "}
            </Text>
            <TextInput
              placeholder="time"
              value={SelectedTime}
              style={{
                color: "#544",
                fontSize: 13,
                letterSpacing: 0.3,
              }}
            />
          </View>

          <Pressable
            onPress={showTimePicker}
            style={{ justifyContent: "center" }}
          >
            <Entypo name="back-in-time" size={20} color="black" />
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
          <Text style={{ color: "#757a89", fontSize: 12 }}>Description</Text>

          <TextInput
            multiline={true}
            numberOfLines={5}
            placeholder="description..."
            style={{
              color: "#544",
              fontSize: 15,
              marginTop: -22,
            }}
          />
        </View>

        <View>
          <Text style={{ color: "#757a89", fontSize: 13, paddingTop: 5 }}>
            Category{" "}
          </Text>
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
          onPress={() => navigation.navigate("Home")}
        >
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
            create task
          </Text>
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
