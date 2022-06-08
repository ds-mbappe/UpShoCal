import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Search = () => {
  const [searchValue, setSearchValue] = useState(null);

  return (
    <View>
      <Text>Search</Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchBar: {},
});
