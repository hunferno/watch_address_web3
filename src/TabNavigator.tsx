import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WatchScreen from "./pages/WatchScreen";
import SearchScreen from "./pages/SearchScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Search"
      screenOptions={{ tabBarStyle: { backgroundColor: "rgb(71 85 105)" }, tabBarShowLabel: false}}
    >
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "rgb(71 85 105)",
          tabBarInactiveTintColor: "rgb(170,245,244)",
          tabBarActiveBackgroundColor: "rgb(170,245,244)",
          tabBarIcon: ({focused}) => (
            <FontAwesome name="search" size={30} color={focused ? "rgb(71 85 105)" : "rgb(170,245,244)"} />
          )
        }}
      />
      <Tab.Screen
        name="Watch"
        component={WatchScreen}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "rgb(71 85 105)",
          tabBarInactiveTintColor: "rgb(170,245,244)",
          tabBarActiveBackgroundColor: "rgb(170,245,244)",
          tabBarIcon: ({focused}) => (
            <FontAwesome name="eye" size={30} color={focused ? "rgb(71 85 105)" : "rgb(170,245,244)"} />
          )
        }}
      />
    </Tab.Navigator>
  );
}
