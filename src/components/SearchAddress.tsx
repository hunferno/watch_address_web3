import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { FontAwesome } from "@expo/vector-icons";

const SearchAddress = ({
  searchAddress,
  setSearchAddress,
  handleSearch,
  isValidAddress,
}) => {
  const [fontsLoaded] = useFonts({
    'BagelFatOne-Regular': require("../../assets/fonts/BagelFatOne-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchHeader}>
        <Text style={styles.searchHeaderTitle}>Addresses WATCHER</Text>
      </View>
      <View style={styles.searchBody}>
        <TextInput
          style={styles.searchInput}
          onChangeText={(text) => setSearchAddress(text)}
          value={searchAddress}
          placeholder="Ether address : Ox...."
          placeholderTextColor={"rgba(237,237,237,0.4)"}
        />
        <TouchableOpacity onPress={handleSearch}>
          <FontAwesome name="search" size={24} color="rgb(170,245,244)" />
        </TouchableOpacity>
      </View>
      {!isValidAddress && (
        <Text style={styles.searchError}>Must be a valid ethereum address !</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    alignItems: "center",
    paddingTop: 25,
  },
  searchHeader: {
    marginBottom: 30,
  },
  searchHeaderTitle: {
    fontFamily: "BagelFatOne-Regular",
    fontSize: 30,
    color: "rgb(170,245,244)",
  },
  searchBody: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  searchInput: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").height * 0.05,
    marginHorizontal: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "rgb(170,245,244)",
    color: "rgb(170,245,244)",
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  searchError: {
    fontWeight: "bold",
    fontSize: 14,
    color: "rgb(228,76,76)",
    marginVertical: 5,
  },
});

export default SearchAddress;
