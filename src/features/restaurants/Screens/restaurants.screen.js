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
import { restaurants } from "../../../testData/restaurants";
import { FlatList } from "react-native";
import styled from "styled-components";
import { Spacer } from "../../../Components/spacer/spacer.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props)=>props.theme.colors.bg.primary};
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
  padding: ${(props)=>props.theme.space[3]};
`;

const ListContainer = styled(View)`
  flex: 1;
  padding: ${(props)=>props.theme.space[0]};
`;
const RestaurantsList= styled.FlatList.attrs({
  contentContainerStyle:{
    padding:16
  },
})``;
export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <ListContainer>
        <RestaurantsList
          showsVerticalScrollIndicator={false}
          data={restaurants}
          renderItem={({ item }) => {
            return <RestaurantInfoCard restaurant={item} /> ;
          }}
          keyExtractor={(item) => item.name}
        />
      </ListContainer>
    </SafeArea>
  );
};
