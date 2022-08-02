import React from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";

function MealItemComponent(props) {
  return (
    <View style={styles.outerContainer}>
      <Pressable onPress={props.onPress}>
        <View>
          <Image source={{ uri: props.imageURL }} style={styles.image} />
          <Text style={styles.title}>{props.title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{props.duration}m</Text>
          <Text style={styles.detailItem}>
            {props.complexity.toUpperCase()}
          </Text>
          <Text style={styles.detailItem}>
            {props.affordability.toUpperCase()}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItemComponent;

const styles = StyleSheet.create({
  outerContainer: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
  innerContainer: {},
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
