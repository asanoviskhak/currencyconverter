import React from 'react'
import {
    TouchableOpacity, 
    Text,  
    StyleSheet 
} from 'react-native';
import colors from '../consts/colors';

const styles = StyleSheet.create({
    row: {
        paddingHorizontal: 24,
        paddingVertical: 18,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    text:{
        fontSize: 18,
        color: colors.text
    },
})

export const RowItem = ({rightIcon, onPress, text}) =>{
    return(
        <TouchableOpacity style={styles.row} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
            {rightIcon}    
        </TouchableOpacity> 
    )
} 