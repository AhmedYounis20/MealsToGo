import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../Components/spacer/spacer.component";
import { Text } from "../../../Components/typography/text.component";
import {Icon,Rating,Info,RestaurantCard,RestaurantCardCover,Section,SectionEnd,Address } from  "./restaurant-info-card.styles"
export const RestaurantInfoCard = ({ restaurant }) => {
  const {
    name,
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos,
    address,
    openingHours = 8,
    rating = 3,
    isClosedTemporarily = true,
    isOpenNow = true
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((item, index) =>
              <SvgXml xml={star} height={25} width={25} key={index} />
            )}
          </Rating>
          <SectionEnd style={styles.opened}>
            {isClosedTemporarily &&
              (<Text variant="error">
                CLOSED TEMPORARILY
              </Text>)}
            {isOpenNow &&
              <Spacer position="left" size="large"  >
                <SvgXml xml={open} height={25} width={25} />
              </Spacer>
            }
            <Spacer position="left" size="large" >
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

styles = StyleSheet.create({


  opened: {
    justifyContent: "flex-end"

  }

})