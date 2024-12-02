import React from "react";
import ReactDOM from "react-dom/client";
import "./output.css";
import App from "./App";
import allReducers from "./redux/reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (process.env.NODE_ENV === "production") disableReactDevTools();

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

const persistedReducer = persistReducer(
  { key: "persist-key", storage },
  allReducers
);

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store);

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
