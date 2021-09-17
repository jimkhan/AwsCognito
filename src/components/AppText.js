import React from 'react'
import { Text, StyleSheet, } from 'react-native'

import { useSelector, useDispatch } from 'react-redux'

import colors from '../config/colors'
import { RFValue } from "react-native-responsive-fontsize";

const AppText = ({ children, style }) => {
    const cart = useSelector((state) => state.cart)
    console.log(cart)
    console.log("Cart from app text")
    return (

        <Text style={[styles.textcommon, style]} > {cart} </Text>
    )
}
const styles = StyleSheet.create({
    textcommon: {
        fontSize: RFValue(12),
        alignSelf: 'center',
        color: colors.dark,
        fontFamily: 'Poppins_Medium',
    }
})

export default AppText;
