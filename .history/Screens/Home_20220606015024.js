import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import HorizontalPicker from "@vseslav/react-native-horizontal-picker";
import data from "../data";

const Home = ({ navigation }) => {
  const [shoesData, setShoesData] = useState([]);

  const brands = ["All", "Nike", "Adidas", "Puma", "New Balance", "Reebok"];

  const brandItem = (item) => (
    <View style={styles.brandItem}>
      <Text style={styles.brandItemText}>{item}</Text>
    </View>
  );

  useEffect(() => {
    setShoesData(data.results);
    // const getShoesData = async () => {
    //   try {
    //     const options = {
    //       method: "GET",
    //       url: "https://the-sneaker-database.p.rapidapi.com/sneakers",
    //       params: { limit: "50" },
    //       headers: {
    //         "X-RapidAPI-Host": "the-sneaker-database.p.rapidapi.com",
    //         "X-RapidAPI-Key":
    //           "b7044a3c23msh334cfb39042dbb2p15f739jsn3b6c82d40ca5",
    //       },
    //     };

    //     await axios
    //       .request(options)
    //       .then(function (response) {
    //         setShoesData(response.data.results);
    //         console.log(shoesData[0].name);
    //       })
    //       .catch(function (error) {
    //         console.error(error);
    //       });
    //   } catch (error) {
    //     console.log("Nothing");
    //   }
    // };
    // getShoesData();
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <View style={styles.msg}>
                <Text style={styles.welcomeMsg}>Welcome</Text>
                <Text style={styles.userName}>Shinra Kusakabe</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.openDrawer();
                }}
              >
                <ImageBackground
                  style={styles.userPicture}
                  source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png",
                  }}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.secondContainer}>
              <Text style={styles.brandTitle}>Brand</Text>
              <HorizontalPicker
                data={brands}
                renderItem={brandItem}
                itemWidth={100}
              />
              <Text style={styles.releasesTitle}>Upcoming Releases</Text>
            </View>
          </>
        }
        data={shoesData}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Image
              style={styles.shoePicture}
              source={{ uri: item.image["thumbnail"] }}
              resizeMode="contain"
            />
            <View style={styles.shoeDetails}>
              <View style={styles.shoeDesc}>
                <Text style={styles.shoeName} numberOfLines={1}>
                  {item.name}
                </Text>
                <Text style={styles.shoeReleaseDate}>{item.releaseDate}</Text>
              </View>
              <Text style={styles.shoePrice}>{item.retailPrice}$</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  brandItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingStart: 30,
    paddingTop: 15,
    paddingEnd: 30,
    paddingBottom: 15,
    marginTop: 20,
    marginStart: 10,
    marginEnd: 10,
    marginBottom: 40,
    backgroundColor: "gray",
    borderRadius: 25,
    shadowColor: "black",
    shadowRadius: 5,
  },
  brandItemText: {
    fontFamily: "Montserrat",
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
  listItem: {
    display: "flex",
    height: 250,
    margin: 20,
    padding: 10,
    backgroundColor: "red",
    borderRadius: 15,
    shadowColor: "black",
    shadowRadius: 5,
    zIndex: -100,
  },
  shoePicture: {
    width: 250,
    height: 250,
    overflow: "visible",
    marginTop: -70,
    marginStart: 110,
    zIndex: 1,
    transform: [{ rotate: "30deg" }],
  },
  shoeDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 20,
    marginTop: -25,
    marginStart: 10,
    marginEnd: 10,
    paddingBottom: 20,
  },
  shoeDesc: {
    width: "75%",
  },
  shoeName: {
    fontFamily: "Montserrat",
    fontSize: 16,
    fontWeight: "bold",
    color: "darkblue",
    marginBottom: 10,
  },
  shoeReleaseDate: {},
  shoePrice: {},
  header: {
    display: "flex",
    flexDirection: "row",
    margin: 15,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  userPicture: {
    width: 40,
    height: 40,
  },
  msg: {
    marginEnd: 15,
    alignItems: "flex-end",
  },
  welcomeMsg: {
    fontFamily: "Montserrat",
    fontSize: 15,
    color: "gray",
  },
  userName: {
    fontFamily: "Montserrat",
    fontSize: 18,
    fontWeight: "bold",
    color: "darkblue",
  },
  secondContainer: {
    display: "flex",
    margin: 15,
  },
  brandTitle: {
    fontFamily: "Montserrat",
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  releasesTitle: {
    fontFamily: "Montserrat",
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginBottom: 20,
  },
});
