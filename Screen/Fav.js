import React from 'react'; 
import {Meal} from '../fake-data/Categories'
import MealsList from './MealsList'
import {MEALS} from '../fake-data/Categories'
const Fav =props=>{
    const favFake = MEALS.filter(el=>el.id==='m2')

    return<MealsList listData ={favFake} navigation={props.navigation}/>
}
Fav.navigationOptions={
    headerTitle :'your favorites'
}
export default Fav