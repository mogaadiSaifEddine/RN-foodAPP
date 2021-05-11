import React from 'react';
import {  StyleSheet,Text ,View ,FlatList, TouchableOpacity} from 'react-native'
import {CATEGORYS}  from '../fake-data/Categories'
import Categ from '../category/category'



const CategoriesScreen = (props)=>{
    const renderItem=(items)=>{
            return(  <Categ styling= {styles.renderItem} color ={items.item.color} title= {items.item.title} onSelect ={()=>{props.navigation.navigate({routeName:'CategoryMeals' ,params : {
                categoryId : items.item.id 
            }} )}}></Categ>)

    }

    return(
  <View >
        
        <FlatList  numColumns={2} keyExtractor={(item )=>item.id} data={CATEGORYS} renderItem={renderItem}/>

    </View>)}
    





const styles =StyleSheet.create({
    screen : {
        flex:1 , 
        justifyContent:'center' , 
        alignItems:'center'
    }, 
    renderItem : {
        flex:1 , 
        margin : 20
    }
   
})
export default CategoriesScreen