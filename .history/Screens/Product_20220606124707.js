import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

const Product = ({ route, navigation }) => {
  const { productData } = route.params;

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
        <View style={styles.header}>
          <Text style={styles.headerText}>{productData.brand}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Product;

const styles = StyleSheet.create({});
