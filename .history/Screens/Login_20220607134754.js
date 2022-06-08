import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const onFooterLinkPress = () => {
    navigation.navigate("Registration");
  };

  const onLoginPress = () => {
    console.log("Pressed");
  };

  return (
    <ScrollView
      style={{ flex: 1, width: "100%" }}
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#AAAAAA"
          onChangeText={(text) => setEmail(text)}
          value={email}
          autoCapitalize="none"
        />
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
    width: 300,
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
    borderRadius: 10,
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
    flex: 1,
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
