import React from 'react';
import { StyleSheet, Text, View } from 'react-native'




const MealDetailscreen = ()=>{
    return(<View style= {styles.screen}>
        <Text>the meal detail screen </Text>
    </View>)
}





const styles =StyleSheet.create({
    screen : {
        flex:1 , 
        justifyContent:'center' , 
        alignItems:'center'
    }
})
export default MealDetailscreen