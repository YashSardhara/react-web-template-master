import { createStore, combineReducers } from "redux";
// import AppReducer from "./reducers/appReducer";
import CountReducer from "./reducers/countReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// import reducers from "./reducers/index";

const PersistConfig = {
  key: "root",
  storage,
  whitelist: ["app", "count"],
};
// import { createStore } from "redux";
const store = createStore(
  persistedReducer,
  wi
const AllReducer = {
  // app: AppReducer,
  count: CountReducer,
};

const rootReducer = combineReducers(AllReducer);
const persistedReducer = persistReducer(PersistConfig, rootReducer);

export const persistor = persistStore(store);
console.log(persistedReducer);
ndow.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export default store;
