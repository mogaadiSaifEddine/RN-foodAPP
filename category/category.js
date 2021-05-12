import React from 'react';
import { StyleSheet , Text , TouchableHighlight , TouchableNativeFeedback,View  , Platform} from 'react-native'
const Category =(props)=>{
  
 return(
        <View style={{...props.styling , ...{backgroundColor:props.color} , ...styles.vi}}>
           <TouchableHighlight style={styles.container } onPress={props.onSelect}>
           <View  style={styles.textContainer} >
               <Text style={styles.text} numberOfLines={2}>{props.title}</Text>
           </View>
          </TouchableHighlight> 
        </View>
    )
}
const styles = StyleSheet.create({
textContainer: {
    flex:1,
    justifyContent:'flex-end' , 
    alignItems:'flex-start'

    


} , 
container :{
    flex:1
},
text:{
    color: 'white'
},
vi :{
    height : 150, 
shadowRadius:10 , 
shadowOffset: {width : 2 , height:0}, 
shadowColor : 'black' , 
shadowOpacity : 0.3 ,
borderRadius : 10
, 
    
}


})
export default Category