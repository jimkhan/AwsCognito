export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const ADD_FAVORITE_LIST = "ADD_FAVORITE_LIST";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const REMOVE_TOTAL_PRODUCT = "REMOVE_TOTAL_PRODUCT";
export const SET_TOTAL = "SET_TOTAL";
export const SET_TOKEN = "SET_TOKEN";
export const SET_COUPON_PRICE = "SET_COUPON_PRICE";


const addProductToCart = (product, state) => {
  
  const updatedCart = [...state.cartSta];
  const taka = product.price;
  const updatedItemIndex = updatedCart.findIndex(
    item => item._id === product._id
  );

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1, total: product.price });
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex]
    };

    updatedItem.quantity++;
    updatedItem.total += product.price;
    updatedCart[updatedItemIndex] = updatedItem;
  }

  return { ...state, cartSta: updatedCart, totalTaka: state.totalTaka + taka };
};


const addProductToFavorite = (product, state) => {

  const updateFavorite = [...state.favorite];

  const updatedItemIndex = updateFavorite.findIndex(
    item => item._id === product._id
  );

  if (updatedItemIndex < 0) {
    updateFavorite.push({ ...product, quantity: 1 });
  } else {
    const updatedItem = {
      ...updateFavorite[updatedItemIndex]
    };
    updateFavorite[updatedItemIndex] = updatedItem;
  }

  return { ...state, favorite: updateFavorite };
};
const removeProductFavorite = (product, state) => {

  const updatedCart = [...state.favorite];

  const updatedItemIndex = updatedCart.findIndex(item => item.id === product._id);
  const updatedItem = {
    ...updatedCart[updatedItemIndex]
  };
  updatedItem.quantity = 0;
  updatedCart.splice(updatedItemIndex, 1);

  return { ...state, favorite: updatedCart };
};
const removeProductFromCart = (product, state) => {

  const updatedCart = [...state.cartSta];
  const updatedItemIndex = updatedCart.findIndex(item => item._id === product._id);
  const takA = product.quantity > 1 ? state.totalTaka - product.price : state.totalTaka;

  const updatedItem = {
    ...updatedCart[updatedItemIndex]
  };

  if (product.quantity >= 2) {
    product.quantity--;
    if (updatedItem.quantity <= 0) {
      updatedCart.splice(updatedItemIndex, 1);
    } else {
      updatedCart[updatedItemIndex] = updatedItem;
    }
  }
  return { ...state, cartSta: updatedCart, totalTaka: takA };
};

const removeSpecificAllItem = (product, state) => {

  const updatedCart = [...state.cartSta];
  const takA = product.price * product.quantity;
  const updatedItemIndex = updatedCart.findIndex(item => item.id === product._id);
  const updatedItem = {
    ...updatedCart[updatedItemIndex]
  };
  updatedItem.quantity = 0;
  updatedCart.splice(updatedItemIndex, 1);

  return { ...state, cartSta: updatedCart, totalTaka: state.totalTaka - takA };
}
const addFavoriteList = (product, state) => {



  return { ...state, favorite: product };
}




const setTOtal = (total, state) => {
  return { ...state, totalTaka: total };

}
const setCouponPrice = (taka, state) => {
  return { ...state, couponPrice: taka };

}

const setToken = (token, state) => {
  console.log("calling okay token from context ")
  return { ...state, token: token };

}


export const shopReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(action.product, state);

    case REMOVE_PRODUCT:
      return removeProductFromCart(action.product, state);

    case ADD_FAVORITE_LIST:
      return addFavoriteList(action.product, state);

    case ADD_FAVORITE:
      return addProductToFavorite(action.product, state);

    case REMOVE_FAVORITE:
      return removeProductFavorite(action.product, state);

    case REMOVE_TOTAL_PRODUCT:
      return removeSpecificAllItem(action.product, state);

    case SET_TOTAL:
      return setTOtal(action.total, state);

    case SET_COUPON_PRICE:
      return setCouponPrice(action.taka, state);

    case SET_TOKEN:
      return setToken(action.token, state);

    default:
      return state;
  }
};
