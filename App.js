import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Searchbar } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { RestaurantsScreen } from "./src/Screens/restaurants.screen";
export default function App() {
  // const [seachValue, setSearchValue] = useState("");
  // const OnSearchChanged = (query) => setSearchValue(query);
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="dark" />
    </>
  );
}
