import React from 'react';
import { StyleSheet, View ,FlatList  ,Text } from 'react-native'
import CategoriesScreen from './CategoriesScreen';
import OneMeal from './OnecategoryMeal'
import {MEALS} from '../fake-data/Categories'

 
const CategoryMealScreen = (props)=>{
    const r =[1,2,3,4,5,6,7]
    const RenderItem = (x)=>{
        console.log(x.item.id , 'dljkhf')
        return <OneMeal onSelect={()=>props.navigation.navigate({routeName:'MealDetail' ,params:{mealId:x.item.id}})} item={x.item}></OneMeal>
    }
    const CatID= props.navigation.getParam('categoryId')
const     meals  =  MEALS.filter(el => el.categoryIds.indexOf(CatID)===0)
    console.log(meals , 'kjfg')
    

    return (<FlatList data={meals} renderItem={RenderItem} />)}

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