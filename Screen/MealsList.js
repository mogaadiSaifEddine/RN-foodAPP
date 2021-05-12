import React from 'react';
import { FlatList ,StyleSheet} from 'react-native'
import {MEALS} from '../fake-data/Meal';
import OneMeal from '../Screen/OnecategoryMeal'
const MealsList =props=>{
    const RenderItem = (x)=>{
        return <OneMeal onSelect={()=>props.navigation.navigate({routeName:'MealDetail' ,params:{mealId:x.item.id}})} item={x.item}></OneMeal>
    }

    return (<FlatList data={props.listData} renderItem={RenderItem} />)}
const styles = StyleSheet.create({
    
})
export default MealsList