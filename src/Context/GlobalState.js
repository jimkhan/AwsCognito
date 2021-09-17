import React, { useReducer } from "react";

import ShopContext from "./shop-context";
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT, REMOVE_TOTAL_PRODUCT, SET_TOTAL, SET_TOKEN, ADD_FAVORITE, REMOVE_FAVORITE, ADD_FAVORITE_LIST, SET_COUPON_PRICE } from "./reducers";


const GlobalState = ({ authvalue, children }) => {


  const [cartState, dispatch] = useReducer(shopReducer, { cartSta: [], totalTaka: 0, token: null, favorite: [], couponPrice: 0 });

  const addProductToCart = product => {
    dispatch({ type: ADD_PRODUCT, product: product });

  };
  const addProductToFavorite = product => {
    dispatch({ type: ADD_FAVORITE, product: product });

  };
  const addFavoriteList = product => {
    dispatch({ type: ADD_FAVORITE_LIST, product: product });

  };
  const removeProductFavorite = product => {

    dispatch({ type: REMOVE_FAVORITE, product: product });
  };

  const removeSpecificAllItem = product => {
    dispatch({ type: REMOVE_TOTAL_PRODUCT, product: product });
  }

  const removeProductFromCart = product => {

    dispatch({ type: REMOVE_PRODUCT, product: product });
  };

  const seTOtal = total => {
    dispatch({ type: SET_TOTAL, total: total });
  }

  const setToken = token => {
    dispatch({ type: SET_TOKEN, token: token });
  }
  const setCouponPrice = taka => {
    dispatch({ type: SET_COUPON_PRICE, taka: taka });
  }



  return (
    <ShopContext.Provider
      value={authvalue, {
        cart: cartState.cartSta,
        favorite: cartState.favorite,
        totalPrice: cartState.totalTaka,
        token: cartState.token,
        couponPrice: cartState.couponPrice,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        removeSpecificAllItem: removeSpecificAllItem,
        setTotal: seTOtal,
        setToken: setToken,
        setCouponPrice: setCouponPrice,
        addProductToFavorite: addProductToFavorite,
        removeProductFavorite: removeProductFavorite,
        addFavoriteList: addFavoriteList

      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default GlobalState;
