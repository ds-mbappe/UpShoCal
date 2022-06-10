import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import SearchBar from "react-native-platform-searchbar";
import data from "../data";

const Home = ({ route, navigation }) => {
  const { userData } = route.params;

  const [searchValue, setSearchValue] = useState("");

  const [filteredDataSource, setFilteredDataSource] = useState([]);

  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    setMasterDataSource(data.results);
    setFilteredDataSource(data.results);
    // const getShoesData = async () => {
    //   try {
    //     const options = {
    //       method: "GET",
    //       url: "https://the-sneaker-database.p.rapidapi.com/sneakers",
    //       params: { limit: "100" },
    //       headers: {
    //         "X-RapidAPI-Host": "the-sneaker-database.p.rapidapi.com",
    //         "X-RapidAPI-Key":
    //           "b7044a3c23msh334cfb39042dbb2p15f739jsn3b6c82d40ca5",
    //       },
    //     };

    //     await axios
    //       .request(options)
    //       .then(function (response) {
    //         setMasterDataSource(response.data.results);
    //         setFilteredDataSource(response.data.results);
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

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearchValue(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearchValue(text);
    }
  };

  return (
    <View style={{ backgroundColor: "#FFFFF9" }}>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <View>
                <TouchableOpacity>
                  <ImageBackground
                    style={styles.userPicture}
                    source={{
                      uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png",
                    }}
                  />
                </TouchableOpacity>
                <View style={styles.msg}>
                  <Text style={styles.welcomeMsg}>Welcome</Text>
                  <Text style={styles.userName}>{userData.name}</Text>
                </View>
              </View>
            </View>
            <View style={styles.dummyContainer}>
              <Text style={styles.dummyText}>Come and discover our shoes</Text>
            </View>
            <View style={styles.secondContainer}>
              <SearchBar
                style={styles.searchBar}
                value={searchValue}
                onChangeText={(text) => {
                  searchFilterFunction(text);
                }}
                placeholder="Search"
                autoCorrect={true}
                onCancel={() => {
                  setSearchValue("");
                }}
                onClear={() => {
                  setSearchValue("");
                }}
              />
              <Text style={styles.releasesTitle}>Upcoming Releases</Text>
            </View>
          </>
        }
        data={filteredDataSource}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Product", {
                productData: item,
              });
            }}
          >
            <View style={styles.listItem}>
              <Image
                style={styles.shoePicture}
                source={{
                  uri: item.image["thumbnail"]
                    ? item.image["thumbnail"]
                    : "https://freepngimg.com/thumb/shoes/28378-2-sneaker-image-thumb.png",
                }}
                resizeMode="contain"
              />
              <View style={styles.shoeDetails}>
                <View style={styles.shoeDesc}>
                  <Text style={styles.shoeName} numberOfLines={1}>
                    {item.name}
                  </Text>
                  <Text style={styles.shoeReleaseDate}>{item.releaseDate}</Text>
                </View>
                <Text style={styles.shoePrice}>
                  $
                  {item.retailPrice
                    ? item.retailPrice
                    : Math.floor(Math.random() * (250 - 150 + 1)) + 150}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
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
    backgroundColor: "white",
    borderRadius: 25,
    shadowColor: "gray",
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
  brandItemText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "gray",
  },
  listItem: {
    display: "flex",
    height: 250,
    margin: 25,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "gray",
    shadowRadius: 3,
    shadowOpacity: 0.5,
    zIndex: -100,
  },
  shoePicture: {
    width: 250,
    height: 250,
    overflow: "visible",
    marginTop: -70,
    marginStart: 60,
    zIndex: 1,
    transform: [{ rotate: "30deg" }],
  },
  shoeDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
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
    fontSize: 17,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
  shoeReleaseDate: {
    fontSize: 15,
    fontWeight: "bold",

    color: "gray",
  },
  shoePrice: {
    fontSize: 24,
    fontWeight: "bold",
    color: "darkblue",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    marginStart: 20,
    marginTop: 50,
    marginEnd: 20,
    marginBottom: 15,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  userPicture: {
    width: 50,
    height: 50,
  },
  msg: {
    marginStart: 10,
    alignItems: "flex-start",
  },
  welcomeMsg: {
    fontSize: 15,
    color: "gray",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "darkblue",
  },
  dummyContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    textAlign: "center",
    margin: 20,
    height: 150,
    borderRadius: 20,
  },
  dummyText: {
    width: "50%",
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  secondContainer: {
    display: "flex",
  },
  searchTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "darkblue",
    marginStart: 25,
  },
  searchBar: {
    margin: 20,
  },
  releasesTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
    marginTop: 20,
    marginBottom: 10,
    marginStart: 25,
  },
});
