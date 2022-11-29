import { combineReducers } from "redux";
import { cartReducer } from "./cart/cart.reducer";

import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/category.reducer";
// import { store } from "./store";
// import { Action } from "@remix-run/router";

export const rootReducer=combineReducers({
    
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer,

})

