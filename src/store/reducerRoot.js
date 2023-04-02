import {roomReducer} from "./rooms/roomReducer";
import {combineReducers, configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    roomReducer
})


const initStore = () => {
    return configureStore({
        reducer : rootReducer,

    })
}

const store = initStore();

export default store