import React from 'react'
import { Pressable, View,Text,StyleSheet} from 'react-native'

function CategoryGridTile(props) {
  return (
    <View style={[styles.outerContainer, {backgroundColor:props.color}]}>
        <Pressable style={styles.center} onPress={props.onPress}>
            <View style={styles.innerContainer}>
                <Text style={styles.text}>{props.title}</Text>
            </View>
        </Pressable>
    </View>
  )
}

export default CategoryGridTile

const styles = StyleSheet.create({
  outerContainer:{
    flex:1,
    margin:16,
    height:150,
    borderRadius:8,
    elevation:4,
    shadowColor:'black',
    shadowOpacity:0.25,
    shadowOffset:{width:0, height:2},
    shadowRadius:8,
    backgroundColor:'white',
  },
  button:{
    flex:1,
  },
  innerContainer:{
    padding:16,
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    fontSize:18,
    fontWeight:'bold'
  }
})