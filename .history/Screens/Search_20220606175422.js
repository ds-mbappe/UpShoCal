import { StyleSheet, Text, View, ScrollView } from "react-native";
import SearchBar from "react-native-platform-searchbar";
import React, { useState, useEffect } from "react";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <ScrollView style={{ backgroundColor: "#FFFFF9" }}>
      <View style={styles.searchBar}>
        <Text style={styles.textSearch}>Search</Text>
        <SearchBar
          value={searchValue}
          onchangeText={setSearchValue}
          placeholder="Search"
          onCancel={() => {
            setSearchValue("");
          }}
        />
        <View style={styles.results}></View>
      </View>
    </ScrollView>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchBar: {
    marginStart: 20,
    marginTop: 50,
    marginEnd: 20,
    marginBottom: 40,
  },
  textSearch: {
    fontSize: 20,
    fontWeight: "bold",
    color: "darkblue",
    marginBottom: 20,
  },
  results: {},
});
