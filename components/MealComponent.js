import {View,Text,StyleSheet} from 'react-native'

function MealComponent(props) {
  return (
    <View style={styles.outerContainer}>
        <View  style={styles.subtitleContainer}>
        <Text style={styles.title}>Ingredients: </Text>
        </View>
        {props.ingredients.map(ing=><View style={styles.listItem}><Text style={styles.textStyle}>{ing}</Text></View>)}
        <View  style={styles.subtitleContainer}>
        <Text style={styles.title}>Steps: </Text>
        </View>
        {props.steps.map(step=><View style={styles.listItem}><Text style={styles.textStyle}>{step}</Text></View>)}

    </View>
  )
}

export default MealComponent

//React native style sheet 
const styles= StyleSheet.create({
    outerContainer:{
        flext:1,
        padding:10,
        margin:5
    },
    subtitleContainer:{
      borderBottomColor:'white',
      borderBottomWidth:2,
      padding:6,
      margin:4
    },
    textStyle:{
      color: 'black',
      textAlign:'center'
    },
    title:
    {color:'white', textAlign:'center',justifyContent:'center'},

    listItem:{
    borderRadius:6,
    paddingHorizontal:8,
    paddingVertical:4,
    marginHorizontal:12,
    marginVertical:4,
    backgroundColor:'#e2b497'
    }
})
