import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native'



const CategoryScreen = ()=>{
    return(<View style= {styles.screen}>
        <Text>the Categorie screen </Text>
    </View>)
}





const styles =StyleSheet.create({
    screen : {
        flex:1 , 
        justifyContent:'center' , 
        alignItems:'center'
    }
})
export default CategoryScreen