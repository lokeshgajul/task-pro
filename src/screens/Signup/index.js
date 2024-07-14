import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Dimensions,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

import signupImage from "../../../assets/signup.jpg";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { createUser } from "../../services/auth";
import { Feather } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigation = useNavigation();

  const handleSignUp = async () => {
    try {
      await createUser(email, password, firstName, lastName, phoneNumber);
      navigation.navigate("Login");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={{ flex: 1, justifyContent: "space-around", padding: 15 }}>
        <View style={{ width: screenWidth, height: screenHeight / 4 }}>
          <View style={{ position: "absolute", left: 2 }}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </View>
          <Image
            source={signupImage}
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          />
        </View>
        <SafeAreaView style={{ justifyContent: "center", padding: 10 }}>
          <View style={{ paddingBottom: 20 }}>
            <Text style={{ fontSize: 17, fontWeight: "600" }}>Sign Up </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              borderBottomColor: "#c6c6c6",
              borderBottomWidth: 1,
            }}
          >
            <AntDesign name="user" size={15} color="black" />
            <TextInput
              style={{
                backgroundColor: "#fff",
                width: Dimensions.get("screen").width - 80,
                borderRadius: 5,
                color: "#000",
                fontSize: 14,
                fontWeight: "500",
                marginLeft: 10,
              }}
              placeholder="First Name"
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              borderBottomColor: "#c6c6c6",
              borderBottomWidth: 1,
              marginTop: 25,
            }}
          >
            {/* <Text>Last Name</Text> */}

            <AntDesign name="user" size={15} color="black" />
            <TextInput
              style={{
                backgroundColor: "#fff",
                width: Dimensions.get("screen").width - 80,
                marginTop: 5,
                borderRadius: 5,
                color: "#000",
                fontSize: 14,
                paddingBottom: 5,
                marginLeft: 10,
                fontWeight: "500",
              }}
              placeholder="Last Name"
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              borderBottomColor: "#c6c6c6",
              borderBottomWidth: 1,
              marginTop: 25,
            }}
          >
            {/* <Text>Email</Text> */}
            <Fontisto name="email" size={15} color="black" />
            <TextInput
              style={{
                backgroundColor: "#fff",
                width: Dimensions.get("screen").width - 80,
                marginTop: 5,
                borderRadius: 5,
                color: "#000",
                fontSize: 14,
                paddingBottom: 5,
                marginLeft: 10,
                fontWeight: "500",
              }}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              borderBottomColor: "#c6c6c6",
              borderBottomWidth: 1,
              marginTop: 25,
            }}
          >
            {/* <Text>First Name</Text> */}
            <Feather name="phone" size={15} color="black" />
            <TextInput
              style={{
                backgroundColor: "#fff",
                width: Dimensions.get("screen").width - 80,
                marginTop: 5,
                borderRadius: 5,
                color: "#000",
                fontSize: 14,
                paddingBottom: 5,
                marginLeft: 10,
                fontWeight: "500",
              }}
              keyboardType="number-pad"
              placeholder="Phone Number"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              borderBottomColor: "#c6c6c6",
              borderBottomWidth: 1,
              marginTop: 25,
            }}
          >
            {/* <Text>First Name</Text> */}
            <Octicons name="lock" size={15} color="black" />
            <TextInput
              style={{
                backgroundColor: "#fff",
                width: Dimensions.get("screen").width - 80,
                marginTop: 5,
                borderRadius: 5,
                color: "#000",
                fontSize: 14,
                paddingBottom: 5,
                fontWeight: "500",
                marginLeft: 10,
              }}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <TouchableOpacity
            style={{
              paddingRight: 15,
              marginTop: 20,
              justifyContent: "flex-end",
              // alignItems: "flex-end",
              backgroundColor: "#7641fe",
              borderRadius: 7,
              padding: 10,
            }}
            onPress={() =>
              // createUser(email, password, firstName, lastName, phoneNumber)
              handleSignUp()
            }
          >
            <Text
              style={{
                textAlign: "center",
                color: "#fff",
                fontWeight: "500",
                letterSpacing: 0.5,
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              marginTop: 15,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#7a7a7a", fontWeight: "400" }}>
              Already have an account
            </Text>
            <Text
              onPress={() => navigation.navigate("Login")}
              style={{ color: "#5c19fd", fontWeight: "800", paddingLeft: 8 }}
            >
              Log in
            </Text>
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  shape: {
    width: "60%",
    height: 280,
    backgroundColor: "#7641fe",
    transform: [{ rotate: "-25deg" }, { rotateX: "-46deg" }, { scaleX: 1.2 }],
    borderBottomLeftRadius: 30,
    shadowColor: "#f9bc52",
    shadowOffset: { width: -10, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },
});
