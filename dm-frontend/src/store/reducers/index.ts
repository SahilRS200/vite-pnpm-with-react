import { combineReducers } from "@reduxjs/toolkit";
import dummyReducer from "./mockReducer";


const allReducers = combineReducers({
    dummy: dummyReducer
})

export default allReducers;