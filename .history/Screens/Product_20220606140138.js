import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";

const Product = ({ route, navigation }) => {
  const { productData } = route.params;

  return (
    <ScrollView style={{ backgroundColor: "#FFFFF9" }}>
      <View>
        <View style={styles.header}>
          <Text style={styles.headerText}>{productData.brand}</Text>
          <Icon name="heart" size={20} color="red" />
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.backContainter}></View>
          <Image
            style={styles.shoePicture}
            source={{ uri: productData.image["thumbnail"] }}
            resizeMode="contain"
          />
          <View style={styles.namePrice}>
            <Text style={styles.shoeName}>{productData.name}</Text>
            <View style={styles.priceBorder}>
              <Text style={styles.shoePrice}>${productData.retailPrice}</Text>
            </View>
          </View>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{productData.story}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Product;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginStart: 20,
    marginTop: 50,
    marginEnd: 20,
    marginBottom: 40,
  },
  headerText: {
    fontFamily: "Montserrat",
    fontSize: 20,
    fontWeight: "bold",
    color: "darkblue",
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginStart: 20,
    marginTop: 100,
    marginEnd: 20,
    marginBottom: 20,
    backgroundColor: "yellow",
    borderRadius: 25,
    shadowColor: "gray",
    shadowRadius: 20,
  },
  backContainter: {
    width: 300,
    height: 300,
    backgroundColor: "gray",
    marginTop: -100,
    zIndex: -100,
    borderRadius: 25,
  },
  shoePicture: {
    width: 200,
    height: 200,
    overflow: "hidden",
    backgroundColor: "gray",
    marginTop: -250,
    marginBottom: 50,
    zIndex: 10,
    transform: [{ rotate: "-30deg" }, { scaleX: -1 }],
  },
  namePrice: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 50,
  },
  shoeName: {
    marginEnd: 10,
    width: "60%",
    fontFamily: "Montserrat",
    fontSize: 25,
    fontWeight: "bold",
    color: "darkblue",
  },
  priceBorder: {
    backgroundColor: "orange",
    borderRadius: 40,
  },
  shoePrice: {
    fontFamily: "Montserrat",
    fontSize: 30,
    paddingStart: 20,
    paddingEnd: 20,
    paddingTop: 25,
    paddingBottom: 25,
    fontWeight: "bold",
    color: "white",
  },
  description: {},
  descriptionTitle: {},
  descriptionText: {},
});
