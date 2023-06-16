import { StatusBar, StyleSheet, View } from "react-native";
import SearchAddress from "../components/SearchAddress";
import Constants from "expo-constants";
import { AddressChecker } from "../services/lib/AddressValidityChecker";
import { useState } from "react";
import ListAddresses from "../components/ListAddresses";
import { AddressGetEthBalance } from "../services/lib/AddressGetEthBalance";

export default function SearchScreen() {
  const [searchAddress, setSearchAddress] = useState<string>(null);
  const [isValidAddress, setIsValidAddress] = useState<boolean>(true);

  const handleSearch = () => {
    setIsValidAddress(true);

    if (!searchAddress || searchAddress.length < 42) {
      setIsValidAddress(false);
    } else {
      AddressChecker(searchAddress)
        .then((res: boolean) => {
          setIsValidAddress(res);
          AddressGetEthBalance(searchAddress);
          // console.log(AddressGetEthBalance(searchAddress));
        })
        .catch(() => {
          setIsValidAddress(false);
        });
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SearchAddress
        searchAddress={searchAddress}
        setSearchAddress={setSearchAddress}
        isValidAddress={isValidAddress}
        handleSearch={handleSearch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "rgb(71 85 105)",
  },
});
