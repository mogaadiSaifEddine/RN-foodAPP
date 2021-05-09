import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import CategoriesScreen from '../Screen/CategoriesScreen'
import CategoryMealScreen from '../Screen/CategoryMealScreen'
import CategoryScreen  from '../Screen/Categoryscreen'
import FiltresScreen from '../Screen/FiltresScreen'
import MealDetailscreen from '../Screen/MealDetailScreen'

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
export default createAppContainer(MealsNavigator)