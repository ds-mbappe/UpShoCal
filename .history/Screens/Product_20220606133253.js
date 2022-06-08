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
    marginBottom: 20,
  },
  headerText: {
    fontFamily: "Montserrat",
    fontSize: 20,
    fontWeight: "bold",
    color: "darkblue",
  },
  mainContainer: {
    flex: 1,
  },
  shoePicture: {
    width: 250,
    height: 250,
    overflow: "visible",
    marginTop: -70,
    zIndex: 1,
    transform: [{ rotate: "30deg" }, { scaleX: -1 }],
  },
  namePrice: {},
  shoeName: {},
  shoePrice: {},
  description: {},
  descriptionTitle: {},
  descriptionText: {},
});
