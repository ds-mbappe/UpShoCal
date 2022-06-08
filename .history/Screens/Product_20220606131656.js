import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";

const Product = ({ route, navigation }) => {
  const { productData } = route.params;

  return (
    <SafeAreaView
      style={{
        flex: 1,
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
            source={{ uri: productData.image["thumbnail"] }}
            resizeMode="contain"
          />
          <View style={styles.namePrice}>
            <Text style={styles.shoeName}>{productData.name}</Text>
            <Text style={styles.shoePrice}>${productData.retailPrice}</Text>
          </View>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{productData.story}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Product;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20,
  },
  headerText: {
    fontFamily: "Montserrat",
    fontSize: 18,
    fontWeight: "bold",
    color: "darkblue",
  },
  mainContainer: {},
  shoePicture: {},
  namePrice: {},
  shoeName: {},
  shoePrice: {},
  description: {},
  descriptionTitle: {},
  descriptionText: {},
});
