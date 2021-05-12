import React from 'react';
import DefaultText from './DefaultText'
import { View, Text ,ImageBackground,StyleSheet ,TouchableOpacity } from 'react-native' 
const OneMeal = (props) =>{
    const {item}=props
    // const mealId= props.navigation.getParam('mealId')
   
    return(
    <TouchableOpacity onPress={props.onSelect}>
        <DefaultText>{item.title}</DefaultText>
         <DefaultText>{item.complexity}</DefaultText>
        <ImageBackground style={styles.img} source={{uri: item.imageUrl}}/>
        <DefaultText>{item.duration}</DefaultText>
        <DefaultText>{item.affordability}</DefaultText>
        <DefaultText>{item.title}</DefaultText>
         
        </TouchableOpacity>)
}
const styles= StyleSheet.create({

img : {
 height : 300 ,
    width : '100%'
}
})
export default OneMeal