import { auth, db } from "./config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const createUser = async (
  email,
  password,
  firstName,
  lastName,
  phoneNumber
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Save additional user details in Firestore
    await setDoc(doc(db, "users", user.uid), {
      firstName,
      lastName,
      phoneNumber,
      email: user.email,
    });

    console.log("signup successfull... ");
    // Store user details in AsyncStorage
    // await AsyncStorage.setItem("user", JSON.stringify(user));
    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

// // auth.js
// import { useNavigation } from "@react-navigation/native";
// import { auth, db } from "./config";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { collection, doc, setDoc } from "firebase/firestore";

// export const createUser = async (
//   email,
//   password,
//   firstName,
//   lastName,
//   phoneNumber
// ) => {
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       const user = userCredential.user;

//       // Save additional user details in Firestore
//       setDoc(doc(db, "users", user.uid), {
//         firstName: firstName,
//         lastName: lastName,
//         phoneNumber: phoneNumber,
//         email: user.email,
//       })
//         .then(() => {
//           onChangeLoggedInUser(user.email);
//           console.log("data saved successfully ");
//           navigation.navigate("Login");
//         })
//         .catch((error) => {
//           console.error("Error saving user details to Firestore: ", error);
//         });
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.error("Error creating user: ", errorCode, errorMessage);
//     });
// };
