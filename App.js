import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealOverviewScreen from "./screens/MealOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            contentStyle: {backgroundColor: "#3f2f25"},
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor:'white'
            }
          }
        >
          <Stack.Screen
            name="Meals Categories"
            component={CategoriesScreen}
            options={{ title: "Meal Categories" }}
          />
          <Stack.Screen
            name="Meal Overview"
            component={MealOverviewScreen}
            options={{ title: "Meal Overview" }}
          />

          <Stack.Screen
            name="Meal Detail"
            component={MealDetailScreen}
            options={{title: "Meal details"}}/>

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
