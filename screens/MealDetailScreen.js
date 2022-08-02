import {View,Text,FlatList} from 'react-native'
import MealComponent from '../components/MealComponent';
import { MEALS } from '../data/dummy-data';

function MealDetailScreen(props) {
  const myID=props.route.params.id;

  const displayMeal = MEALS.filter((mealItem) => {
    return mealItem.id === myID;
  });

  function renderMeal(itemData){
    return(
      <MealComponent
      ingredients={itemData.item.ingredients}
      steps={itemData.item.steps}

      />
    )
  }

  return (
    <View>
        <FlatList
        data={displayMeal}
        keyExtractor={(item)=>item.id}
        renderItem={renderMeal}
        />
    </View>
  )
}

export default MealDetailScreen