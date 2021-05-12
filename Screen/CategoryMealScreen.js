import React from 'react';
import { StyleSheet, View ,FlatList  ,Text } from 'react-native'
import CategoriesScreen from './CategoriesScreen';
import OneMeal from './OnecategoryMeal'
import MealsList from'./MealsList'
import {MEALS} from '../fake-data/Categories'

 
const CategoryMealScreen = (props)=>{
 const  catId = props.navigation.getParam('categoryId')
 const     meals  =  MEALS.filter(el => el.categoryIds.indexOf(catId)===0)



    return (<MealsList listData={meals} navigation ={props.navigation} />)}

// CategoryMealScreen.navigationOptions=(navigationd)=>{
//    const id= navigationd.navigation.getParam('categoryId')
//    console.log(MEALS , 'dfhjk')
//   const title= MEALS.find(product => product.items.some(item => item.name === id));

//   console.log(title)
//   return ({headerTitle:title})

// }




const styles =StyleSheet.create({
    screen : {
        flex:1 , 
        justifyContent:'center' , 
        alignItems:'center'
    }
})
export default CategoryMealScreen