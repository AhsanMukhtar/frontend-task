import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import AuthReducer from "./Auth/AuthSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  Auth: AuthReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }), 
});


const persistor = persistStore(store);

export { store, persistor };
