import { configureStore } from '@reduxjs/toolkit'
import counterSclice from '../feature/counter/counterSclice'
import ShoppingCart from '../feature/shop/cart'
import authentication from '../feature/auth/authentication'

export const store = configureStore({
  reducer: {

      counter: counterSclice,
      cart: ShoppingCart,
      auth: authentication,

  },
})