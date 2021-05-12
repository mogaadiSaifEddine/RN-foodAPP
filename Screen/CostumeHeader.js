import React ,{useState} from 'react';
import {Ionicons} from '@expo/vector-icons'
import {HeaderButton} from 'react-navigation-header-buttons' 
const CustomHeaderButton = (props)=>{
    const [a,b]=useState(true)
    const setb = ()=>{
        b(!a)
    }


    return<HeaderButton {...props} IconComponent={Ionicons} iconSize={23}  /> }
export default CustomHeaderButton