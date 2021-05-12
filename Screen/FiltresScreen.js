import React from 'react';
import { StyleSheet , View , Text } from 'react-native'
import {HeaderButtons , Item } from 'react-navigation-header-buttons'
import  HeaderComponent from './CostumeHeader'




const FiltresScreen = ()=>{
    return(<View style= {styles.screen}>
        <Text>the filtres screen </Text>
    </View>)
}


FiltresScreen.navigationOptions = (navData)=>{
    return{
headerTitle :'filtring',
headerLeft :<HeaderButtons HeaderButtonComponent={
    HeaderComponent
}>
    <Item title ='Menu ' iconName        = 'ios-menu' onPress={()=>navData.navigation.toggleDrawer()} />
</HeaderButtons> 
} }



const styles =StyleSheet.create({
    screen : {
        flex:1 , 
        justifyContent:'center' , 
        alignItems:'center'
    }
})
export default FiltresScreen
