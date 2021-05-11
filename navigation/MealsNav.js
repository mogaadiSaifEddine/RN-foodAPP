import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import CategoriesScreen from '../Screen/CategoriesScreen'
import CategoryMealScreen from '../Screen/CategoryMealScreen'
import CategoryScreen  from '../Screen/Categoryscreen'
import FiltresScreen from '../Screen/FiltresScreen'
import MealDetailscreen from '../Screen/MealDetailScreen'
import {Ionicons} from '@expo/vector-icons'
import Fav from '../Screen/Fav'
import React from 'react';
const  MealsNavigator =createStackNavigator({
    Categories : CategoriesScreen ,
 
    CategoryMeals : {
        screen : CategoryMealScreen
    },
    MealDetail : MealDetailscreen  },
   {mode :  "modal", defaultNavigationOptions : {
        headerStyle :{
            backgroundColor : Platform.OS==='android' ? 'red' : 'green'
            ,
        }}
    
})
const MealsFavTan=createMaterialBottomTabNavigator(
    {meals: MealsNavigator , 
        Favourite : {screen : Fav  , navigationOptions: {
            
    tabBarIcon : (ico)=>{
        return <Ionicons name = 'ios-star' color={ico.activeColor}/>
    }
        }} , },{activeColor:'red' ,  barStyle:{backgroundColor : 'white'}, inactiveColor : 'blue',  })

export default createAppContainer(MealsFavTan)