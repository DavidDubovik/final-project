import logicBasket from "./basket.reducer";
import modal from "./modal.reducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import loginReducer from "./login.reducer";
import allProdReducer from "./products.reducer"


const persistConfig = {
  key: "root",
  storage,
};
const userPersistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  products: logicBasket,
  allProducts: allProdReducer,
  isLogged: loginReducer,
  Modal: modal
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
export const persistor = persistStore(store);
export default store;
