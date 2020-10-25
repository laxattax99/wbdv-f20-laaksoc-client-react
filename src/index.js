import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import CourseManagerComponent from "./components/CourseManagerComponent";
import { combineReducers, createStore } from "redux";
import moduleReducer from "./reducers/moduleReducer";
import lessonReducer from "./reducers/lessonReducer";
import topicReducer from "./reducers/topicReducer";
import widgetReducer from "./reducers/widgetReducer";
import courseReducer from "./reducers/courseReducer";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  moduleReducer,
  lessonReducer,
  topicReducer,
  courseReducer,
  widgetReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <div className="container-fluid">
    <Provider store={store}>
      <CourseManagerComponent />
    </Provider>
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
