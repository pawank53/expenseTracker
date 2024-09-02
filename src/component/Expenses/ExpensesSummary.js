import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { GLOBAL_COLORS } from "../../constants/constants";

const ExpensesSummary=({expenses, periodName})=>{
    const expenseSum=expenses.reduce((sum, expense)=>{
        return sum + expense.amount;
    }, 0);
    return(
        <View style={styles.container}>
            <Text style={styles.period}>{periodName}</Text>
            <Text style={styles.sum}>${expenseSum}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:GLOBAL_COLORS.colors.primary50
    },
    period:{
        fontSize:17,
        color:GLOBAL_COLORS.colors.primary400
    },
    sum:{
        fontWeight:'bold',
        color:GLOBAL_COLORS.colors.primary500
    }
})
export default ExpensesSummary;