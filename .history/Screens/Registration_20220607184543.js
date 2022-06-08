import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
// } from "firebase/auth";
// import { auth } from "../firebase";

const Registration = ({ navigation }) => {
  const [fullName, setFullName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const onFooterLinkPress = () => {
    navigation.navigate("Login");
  };

  // function Register(email, password) {
  //   return createUserWithEmailAndPassword(auth, email, password);
  // }

  const onRegisterPress = () => {
    if (password !== confirmPassword) {
      Alert.alert("Passwords don't match");
    }
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((response) => {
    //     const uid = response.user.uid;
    //     const data = {
    //       id: uid,
    //       email,
    //       fullName,
    //     };
    //     const userRef = firebase.firestore().collection("users");
    //     userRef
    //       .doc(uid)
    //       .set(data)
    //       .then(() => {
    //         navigation.navigate("Home", { user: data });
    //       })
    //       .catch((error) => {
    //         Alert.alert(error);
    //       });
    //   })
    //   .catch((error) => {
    //     Alert.alert(error);
    //   });
  };

  return (
    <ScrollView
      style={{ flex: 1, width: "100%" }}
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 50,
            marginBottom: 50,
          }}
        >
          Register
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Full name"
          placeholderTextColor="#AAAAAA"
          onChangeText={(text) => setFullName(text)}
          value={fullName}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#AAAAAA"
          onChangeText={(text) => setEmail(text)}
          value={email}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#AAAAAA"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#AAAAAA"
          secureTextEntry={true}
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => onRegisterPress()}
        >
          <Text style={styles.buttonTitle}>Register</Text>
        </TouchableOpacity>
        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Already got an account?{" "}
            <Text style={styles.footerLink} onPress={onFooterLinkPress}>
              Log in
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 320,
    height: 50,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 15,
    marginStart: 30,
    marginEnd: 30,
    paddingStart: 15,
  },
  button: {
    backgroundColor: "orange",
    marginStart: 30,
    marginEnd: 30,
    marginTop: 20,
    marginBottom: 15,
    borderRadius: 10,
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  footerView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: "black",
  },
  footerLink: {
    color: "orange",
    fontWeight: "bold",
    fontSize: 16,
  },
});
