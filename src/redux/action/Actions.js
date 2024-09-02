import { ADD_EXPENSE, DELETE_EXPENSE, SET_EXPENSES, UPDATE_EXPENSE } from "../ActionTypes";

export const addExpense= expenses=>({
    type: ADD_EXPENSE,
    payload: expenses
})

export const deleteExpense= id =>({
    type:DELETE_EXPENSE,
    payload:id
})

export const updateExpense=expense=>({
    type:UPDATE_EXPENSE,
    payload: expense
})

export const setExpenses= expense=>({
    type: SET_EXPENSES,
    payload: expense
})