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
import { TouchableOpacity } from "react-native-web";

const Home = () => {
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
        await axios
          .get(
            "https://stockx.com/api/browse?productCategory=sneakers&sort=release_date&releaseTime=gte-1654384198&order=ASC&country=FR"
          )
          .then((response) => {
            setShoesData(response.data.Facets);
            console.log(shoesData["uuid"]);
          });
      } catch (error) {
        console.log("Nothing");
      }
    };
    getShoesData();
  }, []);

  const ListItem = ({ media, shoe, releaseDate, retailPrice }) => {
    <View style={styles.listIteam}>
      <Image
        style={styles.shoePicture}
        source={{ uri: media[2].toString() }}
        resizeMode="contain"
      />
      <View style={styles.shoeDetails}>
        <View style={styles.shoeDesc}>
          <Text style={styles.shoeName}>{shoe}</Text>
          <Text style={styles.shoeReleaseDate}>{releaseDate}</Text>
        </View>
        <Text style={styles.shoePrice}>{retailPrice}$</Text>
      </View>
    </View>;
  };

  const renderItem = ({ item }) => {
    <ListItem
      thumbUrl={item.media[2]}
      shoe={item.shoe}
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
                <Text style={styles.userName}>Name</Text>
              </View>
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
