import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import { Text, View, FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  function renderCatergoryItem(itemData) {
    function pressHanlder() {
      //Second part 
      navigation.navigate("Meal Overview",{
        categoryID: itemData.item.id,
      });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHanlder}
      />
    );
  }

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCatergoryItem}
        numColumns={2}
      />
    </View>
  );
}

export default CategoriesScreen;
