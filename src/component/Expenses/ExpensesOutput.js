import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GLOBAL_COLORS } from "../../constants/constants";
// export const DUMMY_EXPENSES = [
//     {
//         id: "e1",
//         description: "A pair of shoes",
//         amount: 779.00,
//         date: new Date('2024-07-07')
//     },
//     {
//         id: "e2",
//         description: "Groceries",
//         amount: 150.50,
//         date: new Date('2024-07-01')
//     },
//     {
//         id: "e3",
//         description: "Electricity Bill",
//         amount: 90.75,
//         date: new Date('2024-07-02')
//     },
//     {
//         id: "e4",
//         description: "New Laptop",
//         amount: 1200.00,
//         date: new Date('2024-07-03')
//     },
//     {
//         id: "e5",
//         description: "Dinner at Restaurant",
//         amount: 45.00,
//         date: new Date('2024-07-04')
//     },
//     {
//         id: "e6",
//         description: "Monthly Rent",
//         amount: 1500.00,
//         date: new Date('2024-07-05')
//     },
//     {
//         id: "e7",
//         description: "Coffee",
//         amount: 4.75,
//         date: new Date('2024-07-06')
//     },
//     {
//         id: "e8",
//         description: "Gym Membership",
//         amount: 55.00,
//         date: new Date('2024-07-08')
//     },
//     {
//         id: "e9",
//         description: "Books",
//         amount: 120.00,
//         date: new Date('2024-07-09')
//     },
//     {
//         id: "e10",
//         description: "Gas",
//         amount: 30.00,
//         date: new Date('2024-07-10')
//     }
// ];

const ExpensesOutput = ({ expenses ,expensesPeriod, animationType, fallBackText }) => {

    let content=<Text style={styles.infoText}>{fallBackText}</Text>

    if(expenses.length>0){
        content=<ExpensesList expenses={expenses} animationType={animationType}/>
    }
    
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
            {content}
            {/* <ExpensesList expenses={expenses} animationType={animationType}/> */}
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        padding:20,
        backgroundColor:GLOBAL_COLORS.colors.primary700,
        height:'100%',
        
    },
    infoText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 32,
      },
})
export default ExpensesOutput;