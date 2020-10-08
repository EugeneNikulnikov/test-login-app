import React from "react";
import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {rootReducer} from "../reducers/rootReducer";

export const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(()=> console.log(store.getState()));