import React from 'react'
import { View, Text, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../feature/counter/counterSclice'
import { addToCart, removeFromCart} from '../feature/shop/cart'
import { signIn, signOut} from '../feature/auth/authentication'

const SignIn = ({navigation}) => {

    const count = useSelector((state) => state.counter.value)
    const cart = useSelector((state) => state.cart)
    const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()
//   console.log(dispatch)
  console.log(auth)

  const jim ={
    name: "Md Khalid",
    token: "akslfjashfahsfjhaskjhfashfkajhiewrweiurykjdbvjsgdfisdfsiduf",
    // address: [{ village: "jugihati", Thana: "Rupsha", District: "Khulna" }]
}

    return (
        <View>
            <Text>{count}</Text>
            <Button title={"Add"} onPress={()=> dispatch(increment())} />
            <Button title={"Minus"} onPress={()=> dispatch(decrement())} />
        </View>
    )
}

export default SignIn
