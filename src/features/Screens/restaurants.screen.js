import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  StatusBar,
  Platform,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../Components/restaurant-info-card.Component";
import { restaurants } from "../../testData/restaurants";
import { FlatList } from "react-native";
import styled from "styled-components";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: "#fff";
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
  margin-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
`;

const SearchContainer = styled(View)`
  padding: 16px;
`;

const ListContainer = styled(View)`
  flex: 1;
  padding: 16px;
`;

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <ListContainer>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={restaurants}
          renderItem={({ item }) => {
            return <RestaurantInfoCard restaurant={item} />;
          }}
          keyExtractor={(item) => item.name}
        />
      </ListContainer>
    </SafeArea>
  );
};
