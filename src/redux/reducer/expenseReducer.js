import { ADD_EXPENSE, DELETE_EXPENSE, SET_EXPENSES, UPDATE_EXPENSE } from "../ActionTypes";
import uuid from 'react-native-uuid';

const initialState = {
    expenses: []
};
export const expenseReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EXPENSE:
            const newExpense = { ...action.payload };
            return { ...state, expenses: [...state.expenses, newExpense] }
        case UPDATE_EXPENSE:
            return {...state, expenses: state.expenses.map(expense=> expense.id=== action.payload.id ? action.payload : expense)}
        case DELETE_EXPENSE:
            console.log("state:", { state });
            return { ...state, expenses: state.expenses.filter((expense) => expense.id !== action.payload) }
        case SET_EXPENSES:
            const reversedExpenses = action.payload.reverse();
            return { ...state, expenses: reversedExpenses }
        default:
            return state;
    }
}
