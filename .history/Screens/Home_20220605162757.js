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
import SearchBar from "react-native-platform-searchbar";
import HorizontalPicker from "@vseslav/react-native-horizontal-picker";

const Home = ({ navigation }) => {
  const [shoesData, setShoesData] = useState([]);

  const brands = ["All", "Nike", "Adidas", "Puma", "New Balance", "Reebok"];

  const [searchValue, setSearchValue] = useState(null);

  const brandItem = (item) => (
    <View style={styles.brandItem}>
      <Text style={styles.brandItemText}>{item}</Text>
    </View>
  );

  useEffect(() => {
    const getShoesData = async () => {
      try {
        const options = {
          method: "GET",
          url: "https://the-sneaker-database.p.rapidapi.com/sneakers",
          params: { limit: "50" },
          headers: {
            "X-RapidAPI-Host": "the-sneaker-database.p.rapidapi.com",
            "X-RapidAPI-Key":
              "b7044a3c23msh334cfb39042dbb2p15f739jsn3b6c82d40ca5",
          },
        };

        await axios
          .request(options)
          .then(function (response) {
            setShoesData(response.data.results);
            console.log(shoesData);
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

  const ListItem = ({ image, name, releaseDate, retailPrice }) => {
    <View style={styles.listIteam}>
      <Image
        style={styles.shoePicture}
        source={{ uri: image.thumbnail }}
        resizeMode="contain"
      />
      <View style={styles.shoeDetails}>
        <View style={styles.shoeDesc}>
          <Text style={styles.shoeName}>{name}</Text>
          <Text style={styles.shoeReleaseDate}>{releaseDate}</Text>
        </View>
        <Text style={styles.shoePrice}>{retailPrice}$</Text>
      </View>
    </View>;
  };

  const renderItem = ({ item }) => {
    <ListItem
      thumbUrl={item.image.thumbnail}
      shoe={item.name}
      releaseDate={item.releaseDate}
      retailPrice={item.retailPrice}
    />;
  };

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <View style={styles.msg}>
                <Text style={styles.welcomeMsg}>Welcome</Text>
                <Text style={styles.userName}>Name</Text>
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
            <SearchBar
              style={styles.searchBar}
              value={searchValue}
              onchangeText={setSearchValue}
            />
            <Text style={styles.brandTitle}>Brand</Text>
            <HorizontalPicker
              data={brands}
              renderItem={brandItem}
              itemWidth={100}
            />
            <Text style={styles.releasesTitle}>Upcoming Releases</Text>
          </>
        }
        data={shoesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  brandItem: {},
  brandItemText: {},
  listIteam: {},
  shoePicture: {},
  shoeDetails: {},
  shoeDesc: {},
  shoeName: {},
  shoeReleaseDate: {},
  shoePrice: {},
  header: {},
  userPicture: {
    width: 40,
    height: 40,
  },
  msg: {},
  welcomeMsg: {},
  userName: {},
  searchBar: {},
  brandTitle: {},
  releasesTitle: {},
});
