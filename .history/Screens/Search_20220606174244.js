import { StyleSheet, Text, View, ScrollView } from "react-native";
import SearchBar from "react-native-platform-searchbar";
import React, { useState, useEffect } from "react";

const Search = () => {
  const [searchValue, setSearchValue] = useState(null);

  return (
    <ScrollView style={{ backgroundColor: "#FFFFF9" }}>
      <View>
        <Text>Search</Text>
        <SearchBar
          style={styles.searchBar}
          value={searchValue}
          onchangeText={setSearchValue}
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
  results: {},
});
