import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useFonts } from "expo-font";

export default function AddressCard({ card }) {
  const [fontsLoaded] = useFonts({
    "BagelFatOne-Regular": require("../../assets/fonts/BagelFatOne-Regular.ttf"),
  });

  const formattedAddress = () => {
    return `${card.addressNumber.slice(0, 6)}....${card.addressNumber.slice(
      card.addressNumber.length - 6,
      card.addressNumber.length
    )}`;
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.cardContainer}>
      <View style={styles.rowContainer}>
        <Text style={styles.cardTitles}>Address :</Text>
        <Text style={styles.cardResult}>{formattedAddress()}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.cardTitles}>Ether Balance :</Text>
        <Text style={styles.cardResult}>{formattedAddress()}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.cardTitles}>Tokens Holding :</Text>
        <Text style={styles.cardResult}>{formattedAddress()}</Text>
      </View>
      <View style={styles.callToActionContainer}>
        <TouchableOpacity style={styles.buttonShape}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: Dimensions.get("screen").width * 0.8,
    borderColor: "rgb(170,245,244)",
    borderWidth: 2,
    marginBottom: 20,
    padding: 20,
    borderRadius: 30,
  },
  rowContainer: {
    marginBottom: 20,
    flexDirection: "row",
  },
  cardTitles: {
    fontFamily: "BagelFatOne-Regular",
    fontSize: 16,
    color: "rgb(170,245,244)",
  },
  cardResult: {
    fontFamily: "BagelFatOne-Regular",
    fontSize: 16,
    marginHorizontal: 15,
    color: "rgb(170,245,244)",
    letterSpacing: 2,
  },
  callToActionContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonShape: {
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("screen").width * 0.2,
    height: 50,
    borderColor: "rgb(170,245,244)",
    borderWidth: 2,
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: "BagelFatOne-Regular",
    color: "rgb(170,245,244)",
  },
});
