import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';

import colors from '../config/colors';

const Button = ({ title, style, textStyle, onPress }) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Text style={[styles.buttontxt, textStyle]}> {title} </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('80%'),
        height: hp('7.13%'),
        borderColor: colors.medium,
        borderWidth: 1,
        borderRadius: hp('4%'),
        marginTop: 10,
    },
    buttontxt: {
        color: colors.medium,
        fontFamily: 'Poppins_Medium',
        fontSize: RFValue(15),
    },
});
export default Button;
