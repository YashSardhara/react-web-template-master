import { createStore, combineReducers } from "redux";
import AppReducer from "./reducers/appReducer";
import CountReducer from "./reducers/countReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const PersistConfig = {
  key: "root",
  storage,
  whitelist: ["app", "count"],
};

const AllReducer = {
  app: AppReducer,
  count: CountReducer,
};

const rootReducer = combineReducers(AllReducer);
const persistedReducer = persistReducer(PersistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export const persistor = persistStore(store);
export default store;
