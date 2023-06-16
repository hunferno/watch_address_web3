import { View, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import AddressCard from "./AddressCard";
import { cardModelType } from "../models/cardModelType";

const ListAddresses = ({ list }) => {
  if (list.length < 1) {
    return (
      <View style={styles.listContainer}>
        <Text style={styles.noAddress}>
          No address available{" "}
          <Entypo name="emoji-sad" size={24} color="rgb(170,245,244)" />
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.listContainer}>
      {list.map((card: cardModelType) => (
        <AddressCard key={card.addressNumber} card={card} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    alignItems: "center",
    marginVertical: 25,
  },
  noAddress: {
    color: "rgb(170,245,244)",
    fontWeight: "bold",
  },
});

export default ListAddresses;
