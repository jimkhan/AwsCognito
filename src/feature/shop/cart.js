import { createSlice } from '@reduxjs/toolkit'


const initialState = [
    {
        id: 1,
        name: "Md waid khan jim",
        age: 30,
        // address: [{ village: "Deara", Thana: "Rupsha", District: "Khulna" }]
    }
]

const ShoppingCart =  createSlice({
    name: "cart",
    initialState,
    reducers: {

        addToCart : (state, action)=>{

            state.push(action.payload) 
        },

        removeFromCart : (state, action)=>{

            const itemIndex = state.findIndex(
                item => item.id === action.payload
              );
              console.log(itemIndex)
              if(itemIndex >= 0){

                  state.splice(itemIndex, 1);
              }
        },
    },

})

export const { addToCart, removeFromCart } = ShoppingCart.actions

export default ShoppingCart.reducer