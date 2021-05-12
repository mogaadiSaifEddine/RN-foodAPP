import React from 'react'; 
import {HeaderButtons , Item} from 'react-navigation-header-buttons'
import MealsList from './MealsList'
import {MEALS} from '../fake-data/Categories'
import  HeaderComponent from './CostumeHeader'

const Fav =props=>{
    const favFake = MEALS.filter(el=>el.id==='m2')

    return<MealsList listData ={favFake} navigation={props.navigation}/>
}
Fav.navigationOptions=navData=>{
    console.log(navData.navigation)

  return{  headerTitle :'your favorites'
    ,
    headerLeft :()=><HeaderButtons HeaderButtonComponent={
        HeaderComponent
    }>
        <Item title ='Menu ' iconName        = 'ios-menu' onPress={()=>navData.navigation.toggleDrawer()} />
    </HeaderButtons> 
}}
export default Fav