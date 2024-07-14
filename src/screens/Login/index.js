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
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import login from "../../../assets/login.jpg";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { createUser } from "../../services/auth";
import { Feather } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../../redux/slices/AuthSlice";
const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

const Index = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const dispatch = useDispatch();

  const loginUser = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      dispatch(setLoggedIn({ isLoggedIn: true, userUid: user.uid }));
      console.log("user uid ", user.uid);
      return user;
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  };

  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={{ padding: 15 }}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{ position: "absolute", left: 15, top: 20, zIndex: 3 }}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </Pressable>
        <View style={{ width: screenWidth, height: screenHeight / 3.2 }}>
          <Image
            source={login}
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          />
        </View>

        <SafeAreaView
          style={{ justifyContent: "center", padding: 10, marginTop: 60 }}
        >
          <View style={{ paddingBottom: 20 }}>
            <Text style={{ fontSize: 17, fontWeight: "600" }}>Login </Text>
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

          <Text
            style={{
              textAlign: "right",
              color: "#5c19fd",
              fontWeight: "600",
              paddingTop: 8,
            }}
          >
            Forgot Password
          </Text>
          <TouchableOpacity
            style={{
              paddingRight: 15,
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#7641fe",
              borderRadius: 7,
              padding: 10,
            }}
            onPress={() =>
              // createUser(email, password, firstName, lastName, phoneNumber)
              loginUser()
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
              Log in
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              marginTop: 15,
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#555", fontWeight: "600" }}>
              Create Account
            </Text>
            <Text
              onPress={() => navigation.navigate("SignUp")}
              style={{ color: "#5c19fd", fontWeight: "800", paddingLeft: 8 }}
            >
              Sign up
            </Text>
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginTop: -260,
  },
  shape: {
    width: "60%",
    height: 200,
    transform: [{ rotateZ: "-30deg" }, { scaleX: 1.2 }],
    backgroundColor: "#7641fe",
    borderBottomLeftRadius: 30,
    shadowColor: "#f9bc52",
    shadowOffset: { width: -10, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },
  input: {
    padding: 5,
    backgroundColor: "#ffff",
    margin: 10,
    borderRadius: 5,
    fontSize: 12,
    width: Dimensions.get("screen").width - 150,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  loginBtn: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 10,
    width: Dimensions.get("screen").width - 150,
  },
  loginBtnText: {
    fontSize: 12,
    color: "#fff",
    textAlign: "center",
  },
});
