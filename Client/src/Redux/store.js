import reducer from "./reducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import loginReducer from "./login.reducer";

const persistConfig = {
  key: "root",
  storage,
};
const userPersistConfig = {
  key: "isLogged",
  storage,
};

const rootReducer = combineReducers({
    products: reducer,
  isLogged: persistReducer(userPersistConfig, loginReducer),
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
export const persistor = persistStore(store);
export default store;
