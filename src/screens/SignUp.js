import React from 'react'
import { View, Text, Button } from 'react-native'

import AppText from '../components/AppText'
import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'

const SignUp = ({navigation}) => {
    return (
        <View>
            <Text>Sign Up here</Text>
            <AppButton title={"Go to sign in"} onPress={()=> navigation.navigate("SignIn")} />
        </View>
    )
}

export default SignUp
