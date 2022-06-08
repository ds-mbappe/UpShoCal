import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const [messageType, setMessageType] = useState();

  const onFooterLinkPress = () => {
    navigation.navigate("Registration");
  };

  const onLoginPress = (credentials) => {
    const url = "https://damp-forest-17400.herokuapp.com/user/login";

    axios
      .post(url, credentials)
      .then((response) => {
        const result = response.data;
        const { message, status, data } = result;

        if (status !== "SUCCESS") {
          handleMessage(message, status);
        } else {
          navigation.navigate("Home", {
            userData: data[0],
          });
        }
      })
      .catch((error) => {
        console.log(error.JSON());
      });
    console.log("Login Pressed");
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
          Login
        </Text>
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
        <TouchableOpacity style={styles.button} onPress={() => onLoginPress()}>
          <Text style={styles.buttonTitle}>Login</Text>
        </TouchableOpacity>
        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Don't have an account yet?{" "}
            <Text style={styles.footerLink} onPress={onFooterLinkPress}>
              Register
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

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
