import React from 'react';
import { StyleSheet , View , Text } from 'react-native'




const FiltresScreen = ()=>{
    return(<View style= {styles.screen}>
        <Text>the filtres screen </Text>
    </View>)
}


FiltresScreen.navigationOptions = {
headerTitle :'filtring'
}


const styles =StyleSheet.create({
    screen : {
        flex:1 , 
        justifyContent:'center' , 
        alignItems:'center'
    }
})
export default FiltresScreen