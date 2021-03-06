import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducer, { initialState } from "./store/reducer";
import AppWrapper from "./components/AppWrapper/AppWrapper";

// If you are interested in using the redux devtools
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = composeWithDevTools({});
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

const ConnectedApp = () => (
  <Provider store={store}>
    <AppWrapper />
  </Provider>
);

ReactDOM.render(<ConnectedApp />, document.getElementById("root"));
