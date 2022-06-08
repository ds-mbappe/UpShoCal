import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";

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
          <Icon name="heart" size={30} color="red" />
        </View>
        <View style={styles.mainContainer}>
          <Image
            style={styles.shoePicture}
            source={{ uri: productData.image.thumbnail }}
            resizeMode="contain"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Product;

const styles = StyleSheet.create({});
