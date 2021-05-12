import React from 'react';
import { StyleSheet,ScrollView, View, Image ,Text } from 'react-native'
import {MEALS} from '../fake-data/Categories'
import {HeaderButtons, Item }  from   'react-navigation-header-buttons'
import HeaderButton from './CostumeHeader'
import DefaultText from './DefaultText'

const ListItems =props=>{
    console.log(props.children)
    return (
        <View style={styles.list}>
            <Text>{props.children}</Text> </View>
    )
}

const MealDetailscreen = (props)=>{ 
 
    const id  = props.navigation.getParam('mealId')
    const meal = MEALS.find (el =>el.id===id)
    return(
        <ScrollView>
            <Image style={styles.img} source={{uri:meal.imageUrl}}/>
      <View style= {styles.screen}>
          <Text style={styles.title}>ingredients</Text>
          {meal.ingredients.map(el=><DefaultText>{el}</DefaultText>) }

<Text style={styles.title}>steps</Text>
{meal.steps.map(el=><DefaultText>{el}</DefaultText>) }



    </View></ScrollView>)
}

MealDetailscreen.navigationOptions=navdata =>{
    const id  = navdata.navigation.getParam('mealId')
    const meal = MEALS.find (el =>el.id===id)
        return({
            headerRight : ()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item iconName = 'ios-star' title ='starios'/>
            </HeaderButtons>}
    )
    
}




const styles =StyleSheet.create({
    screen : {
        flex:1 , 
        justifyContent:'center' , 
        alignItems:'center'
    },
    img:{
        width : '100%',
        height :100
    } ,
    title:{
        fontFamily : 'opens-sans-bold' ,
        fontSize : 22 ,
        textAlign : 'center'
    },
  
})
export default MealDetailscreen