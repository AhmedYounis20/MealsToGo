import React from "react";
import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";
import styled from "styled-components";

const RestaurantCard = styled(Card)`
  background-color: white;
  padding: 10px;
  margin: 10px;
`;

const RestaurantCardCover = styled(Card.Cover)``;
const Title = styled.Text`
  font-size: 20px;
  color: rgba(200, 155, 230, 0.9);
`;

export const RestaurantInfoCard = ({ restaurant }) => {
  const {
    name,
    // icon,
    photos,
    // address,
    // openingHours,
    // rating,
    // isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <Card.Cover source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
