import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  StatusBar,
  Platform,
} from "react-native";

import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../Components/restaurant-info.Component";
import { restaurants } from "../testData/restaurants";
import { FlatList } from "react-native";
export const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchView}>
        <Searchbar />
      </View>
      <View style={styles.listView}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={restaurants}
          renderItem={({ item }) => {
            return <RestaurantInfo restaurant={item} />;
          }}
          keyExtractor={(item) => item.name}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  listView: {
    flex: 1,
    padding: 16,
  },
  searchView: {
    padding: 16,
  },
});
