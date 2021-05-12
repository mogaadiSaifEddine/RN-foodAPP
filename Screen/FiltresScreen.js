import React from 'react';
import { StyleSheet , View , Text } from 'react-native'
import {HeaderButtons ,HeaderButton, Item } from 'react-navigation-header-buttons'




const FiltresScreen = ()=>{
    return(<View style= {styles.screen}>
        <Text>the filtres screen </Text>
    </View>)
}


FiltresScreen.navigationOptions = (navData)=>{
    return{
headerTitle :'filtring',
headerLeft :<HeaderButtons HeaderButtonComponent={HeaderButton}>
           <Item title ='Menu' iconName='ios-menu' onPress={()=>navData.navigation.toggleDrawer()} />
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
