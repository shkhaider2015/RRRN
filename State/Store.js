import { createStore } from "redux";
import { CounterReducer } from "./Reducer";
import { Reducers } from "./Reducer";

export const Store = createStore(Reducers)