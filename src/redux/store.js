import { createStore, combineReducers } from "redux";
import AppReducer from "../redux/reducers/appReducer";
import CountReducer from "../redux/reducers/countReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const PersistConfig = {
  key: "root",
  storage,
  whitelist: ["app"],
};

const AllReducer = {
  app: AppReducer,
};

const rootReducer = combineReducers(AllReducer, CountReducer);
const persistedReducer = persistReducer(PersistConfig, rootReducer);

const store = createStore(persistedReducer);
export const Persistor = persistStore(store);
export default store;


// import { createStore } from "redux";

// import reducers  from "../redux/reducers/index";

// const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export default store;