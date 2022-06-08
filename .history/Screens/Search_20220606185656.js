import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import SearchBar from "react-native-platform-searchbar";
import React, { useState, useEffect } from "react";

const Search = ({ navigation }) => {
  const [searchValue, setSearchValue] = useState("");

  const [filteredDataSource, setFilteredDataSource] = useState([]);

  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    const getShoesData = async () => {
      try {
        const options = {
          method: "GET",
          url: "https://the-sneaker-database.p.rapidapi.com/sneakers",
          params: { limit: "100" },
          headers: {
            "X-RapidAPI-Host": "the-sneaker-database.p.rapidapi.com",
            "X-RapidAPI-Key":
              "b7044a3c23msh334cfb39042dbb2p15f739jsn3b6c82d40ca5",
          },
        };

        await axios
          .request(options)
          .then(function (response) {
            setMasterDataSource(response.data.results);
            setFilteredDataSource(response.data.results);
            //console.log(shoesData[0].name);
          })
          .catch(function (error) {
            console.error(error);
          });
      } catch (error) {
        console.log("Nothing");
      }
    };
    getShoesData();
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
    <View style={styles.container}>
      <Text style={styles.textSearch}>Search</Text>
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
      <FlatList
        style={{ backgroundColor: "#FFFFF9" }}
        data={filteredDataSource}
        keyExtractor={(item) => item.id}
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
              <Text style={styles.shoeName} numberOfLines={1}>
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 40,
    backgroundColor: "#FFFFF9",
  },
  textSearch: {
    marginStart: 20,
    marginTop: 50,
    fontSize: 20,
    fontWeight: "bold",
    color: "darkblue",
    marginBottom: 20,
  },
  searchBar: {
    marginStart: 20,
    marginEnd: 20,
    marginBottom: 20,
  },
  listItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20,
  },
  shoePicture: {
    width: 50,
    height: 50,
  },
  shoeName: {
    fontSize: 17,
    fontWeight: "bold",
    color: "black",
  },
});
