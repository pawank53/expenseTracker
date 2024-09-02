import { combineReducers, createStore } from "redux";
import { expenseReducer } from "../reducer/expenseReducer";


const rootReducer=combineReducers({
    expenseState: expenseReducer
})

export const store=createStore(rootReducer);