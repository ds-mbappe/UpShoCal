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
import axios from "axios";

const Registration = ({ navigation }) => {
  const [fullName, setFullName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const [messageType, setMessageType] = useState();

  const onFooterLinkPress = () => {
    navigation.navigate("Login");
  };

  const onRegisterPress = (name, username, pass) => {
    if (password !== confirmPassword) {
      Alert.alert("Passwords don't match");
    } else {
      const url = "https://damp-forest-17400.herokuapp.com/user/register";

      axios
        .post(url, {
          name: name,
          email: username,
          password: pass,
        })
        .then((response) => {
          const result = response.data;
          const { message, status, data } = result;

          if (status !== "SUCCESS") {
            handleMessage(message, status);
          } else {
            navigation.navigate("Home", {
              userData: data,
            });
          }
        })
        .catch((error) => {
          //console.log(error.response.data);
          handleMessage("An error occurred.");
        });
      console.log("Register Pressed");
    }
  };

  const handleMessage = (message, type = "FAILED") => {
    setErrorMessage(message);
    setMessageType(type);
    alert(message);
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
          onPress={() => onRegisterPress(fullName, email, password)}
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
