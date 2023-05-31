import logicBasket from "./basket.reducer";
import modal from "./modal.reducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import loginReducer from "./login.reducer";
import allProdReducer from "./products.reducer"

const store = configureStore({
    reducer: { products: reducer }
})

const persistConfig = {
  key: "root",
  storage,
  blacklist: ['Modal']
};


const rootReducer = combineReducers({
  products: logicBasket,
  allProducts: allProdReducer,
  isLogged: loginReducer,
  Modal: modal
});


export default store