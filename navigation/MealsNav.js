import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
 import { createDrawerNavigator } from 'react-navigation-drawer';

import {createStackNavigator} from 'react-navigation-stack'
import {createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import CategoriesScreen from '../Screen/CategoriesScreen'
import CategoryMealScreen from '../Screen/CategoryMealScreen'
import CategoryScreen  from '../Screen/Categoryscreen'
import FiltresScreen from '../Screen/FiltresScreen'
import MealDetailscreen from '../Screen/MealDetailScreen'
import {Ionicons} from '@expo/vector-icons'
import Fav from '../Screen/Fav'
import React from 'react';


const defaultoptions =  { headerStyle :{
    backgroundColor : Platform.OS==='android' ? 'red' : 'green'
    ,
}}



const  MealsNavigator =createStackNavigator({
    Categories : CategoriesScreen ,
 
    CategoryMeals : {
        screen : CategoryMealScreen
    },
    MealDetail : MealDetailscreen  },
   {mode :  "modal", defaultNavigationOptions : defaultoptions
    
})


const FavNavigation = createStackNavigator({Favourites : Fav , 
MealDetil : MealDetailscreen} ,{navigationOptions : defaultoptions} )



const MealsFavTan=createMaterialBottomTabNavigator(
    {meals: {screen : MealsNavigator , navigationOptions : {
        tabBarIcon : (ico)=>{
            return <Ionicons name = 'ios-restaurant' color={ico.activeColor}/>
        }

    }} , 
        Favourite : {screen : FavNavigation  , navigationOptions: {
            
    tabBarIcon : (ico)=>{
        return <Ionicons name = 'ios-star' color={ico.activeColor}/>
    }
        }} , },{activeColor:'red' ,  barStyle:{backgroundColor : 'white'}, inactiveColor : 'blue',  })



const FiltresNav = createStackNavigator({
    
FiltreS:FiltresScreen
})



const MainNavigator = createDrawerNavigator({
            MealsFavs : MealsFavTan ,
            Filtrescreen : FiltresNav
        })
export default createAppContainer(MainNavigator)