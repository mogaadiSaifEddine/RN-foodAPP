import React from 'react';
import { View, Text ,ImageBackground,StyleSheet ,TouchableOpacity } from 'react-native' 
const OneMeal = (props) =>{
    const {item}=props
    // const mealId= props.navigation.getParam('mealId')
   
    return(
    <TouchableOpacity onPress={props.onSelect}>
        <Text>{item.title}</Text>
         <Text>{item.complexity}</Text>
        <ImageBackground style={styles.img} source={{uri: item.imageUrl}}/>
        <Text>{item.duration}</Text>
        <Text>{item.affordability}</Text>
        <Text>{item.title}</Text>
         
        </TouchableOpacity>)
}
const styles= StyleSheet.create({

img : {
 height : 300 ,
    width : '100%'
}
})
export default OneMeal