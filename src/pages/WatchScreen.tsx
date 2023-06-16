import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import Constants from "expo-constants";
import { cardModelType } from "../models/cardModelType";
import ListAddresses from "../components/ListAddresses";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

export default function WatchScreen() {
  const [list, setList] = useState<cardModelType[]>([]);

  const tabBarHeight = useBottomTabBarHeight();
  useEffect(() => {
    setList([
      {
        addressNumber: "0xac15b4C2D2dc3218F2d4037dc44c6106B939fB12",
        ethBalance: 1.67,
        tokenHolding: 8,
      },
      {
        addressNumber: "0xac15b4C2D2dc3218F2d4037dc44c6106B939fB13",
        ethBalance: 1.67,
        tokenHolding: 8,
      },
      {
        addressNumber: "0xac15b4C2D2dc3218F2d4037dD44c6106B939fB13",
        ethBalance: 1.67,
        tokenHolding: 8,
      },
      {
        addressNumber: "0xac13b4C2D2dc3218F2d4037dD44c6106B939fB13",
        ethBalance: 1.67,
        tokenHolding: 8,
      },
    ]);
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.listHeaderContainer}>
        <View style={styles.listHeader}>
          <Text style={styles.listHeaderTitle}>Addresses LIST</Text>
        </View>
      </View>

      <ListAddresses list={list} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "rgb(71 85 105)",
  },
  listHeaderContainer: { alignItems: "center" },
  listHeader: {
    marginBottom: 30,
  },
  listHeaderTitle: {
    fontFamily: "BagelFatOne-Regular",
    fontSize: 30,
    color: "rgb(170,245,244)",
  },
});
