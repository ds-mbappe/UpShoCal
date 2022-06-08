import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

const Product = ({ route, navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFF9",
      }}
    >
      <View>
        <Text>Product</Text>
      </View>
    </SafeAreaView>
  );
};

export default Product;

const styles = StyleSheet.create({});
