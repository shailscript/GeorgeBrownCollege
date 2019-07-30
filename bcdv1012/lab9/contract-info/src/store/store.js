import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./reducer";

export const store = createStore(rootReducer);
