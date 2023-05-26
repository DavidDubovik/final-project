import reducer from "./reducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import loginReducer from "./login.reducer";
import allProdReducer from "./products.reducer"


const persistConfig = {
  key: "root",
  storage,
  blacklist: ['modal']
};


const rootReducer = combineReducers({
    products: reducer,
    allProducts: allProdReducer,
    isLogged: loginReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
export const persistor = persistStore(store);
export default store;
