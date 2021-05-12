import React from 'react';
import { StyleSheet, Text, View  } from 'react-native'
import {MEALS} from '../fake-data/Categories'
import {HeaderButtons, Item }  from   'react-navigation-header-buttons'
import HeaderButton from './CostumeHeader'



const MealDetailscreen = (props)=>{ 
 
    const id  = props.navigation.getParam('mealId')
    const meal = MEALS.find (el =>el.id===id)
    return(<
        View style= {styles.screen}>
        <Text>{meal.ingredients} </Text>
<Text>{meal.steps}</Text> 



    </View>)
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
    }
})
export default MealDetailscreen