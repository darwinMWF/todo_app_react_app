// import {combineReducers,legacy_createStore as createStore} from "redux"
// import { Reservationdata } from "./reducer";

// // const reducer = combineReducers({
// //     newbooking:Reservationdata
// // })



import { combineReducers,legacy_createStore as createStore, applyMiddleware} from "redux";
import Reservationdata from "./reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    newbooking: Reservationdata
});


const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))
export default store;