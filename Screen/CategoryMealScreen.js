import React from 'react';
import { StyleSheet, View ,FlatList  ,Text } from 'react-native'
import CategoriesScreen from './CategoriesScreen';

import {MEALS} from '../fake-data/Categories'


const CategoryMealScreen = (props)=>{
    const RenderItem = x=>{
        return (<View><Text>{x.title}</Text></View>)
    }
    const CatID= props.navigation.getParam('categoryId')
    const meals  =  MEALS.find(product => product.categoryIds.indexOf(id)!==0)
    console.log(meals  , 'kjfg')
    

    return(<FlatList data={meals} renderItem={renderItem}/>)}

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