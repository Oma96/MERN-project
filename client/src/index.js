import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import 'font-awesome/css/font-awesome.min.css';
import { combineReducers } from "redux";
import { authReducer } from "./redux/reducers/authReducer";
import { productReducer } from "./redux/reducers/prodReducer";
import {cartReducer} from "./redux/reducers/cartReducer"


 const rootReducer=combineReducers({
  auth :authReducer,
  products:productReducer,
  cart: cartReducer,
})
const cartItemsFromlocalStorage= localStorage.getItem("cartItems")
? JSON.parse(localStorage.getItem("cartItems")):[]

const initialState={
    cart:{
        cartItems: cartItemsFromlocalStorage
    }
}

const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);