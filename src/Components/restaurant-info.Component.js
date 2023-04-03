import React from "react";
import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

export const RestaurantInfo = ({restaurant}) => {
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
    <Card elevation={5} style={styles.card}>
      <Card.Cover source={{ uri: photos[0] }} />
      <Text style={styles.name}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 10,
    margin: 10,
  },
  name: {
    fontSize: 20,
    color: "rgba(200,155,230,0.9)",
  },
});
