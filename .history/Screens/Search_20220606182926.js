import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import SearchBar from "react-native-platform-searchbar";
import React, { useState, useEffect } from "react";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const [filteredDataSource, setFilteredDataSource] = useState([]);

  const [masterDataSource, setMasterDataSource] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.textSearch}>Search</Text>
      <SearchBar
        style={styles.searchBar}
        value={searchValue}
        onChangeText={setSearchValue}
        placeholder="Search"
        autoCorrect={true}
        onCancel={() => {
          setSearchValue("");
        }}
        onClear={() => {
          setSearchValue("");
        }}
      />
      <View style={styles.results}></View>
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
    marginBottom: 50,
  },
  results: {},
});
