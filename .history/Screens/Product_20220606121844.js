import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Product = ({ route, navigation }) => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFF9",
        marginTop: 50,
      }}
    >
      <Text>Product</Text>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({});
