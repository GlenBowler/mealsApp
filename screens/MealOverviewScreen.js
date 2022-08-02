import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import MealItemComponent from "../components/MealItemComponent";
import { MEALS } from "../data/dummy-data";

function MealOverviewScreen({ route,navigation }) {
  const catID = route.params.categoryID;

  const displayMeal = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catID) >= 0;
  });


  function renderMealItem(itemData) {
    function pressHandler(){
      navigation.navigate("Meal Detail",{
        id: itemData.item.id
      });
    }
    return (
      <MealItemComponent
        title={itemData.item.title}
        imageURL={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onPress={pressHandler}
      />
    );
  }

  return (
    <View>
      <FlatList
        data={displayMeal}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealOverviewScreen;

const styles = StyleSheet.create({});
