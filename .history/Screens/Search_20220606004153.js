import { StyleSheet, Text, View } from "react-native";
import SearchBar from "react-native-platform-searchbar";
import React from "react";

const Search = () => {
  const [searchValue, setSearchValue] = useState(null);

  return (
    <View>
      <Text>Search</Text>
      <SearchBar
        style={styles.searchBar}
        value={searchValue}
        onchangeText={setSearchValue}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchBar: {},
});
