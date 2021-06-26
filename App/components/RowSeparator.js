import React from 'react'
import colors from '../consts/colors';
import { View, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    separator:{
        backgroundColor: colors.border,
        height: StyleSheet.hairlineWidth,
        marginLeft: 20
    }
})
export const RowSeparator=()=> {
    return (
        <View style={styles.separator}></View>
    )
}
